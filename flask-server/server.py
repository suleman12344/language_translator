from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from flask_cors import CORS
# Initialize the Flask app
app = Flask(__name__)
CORS(app)
# Load the tokenizer and model
model_name = "facebook/m2m100_418M"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# Supported languages for the model
SUPPORTED_LANGUAGES = {
    "en": "English",
    "es": "Spanish",
    "fr": "French",
    "de": "German",
    "ar": "Arabic",
    "zh": "Chinese",
    "hi": "Hindi",
    "ru": "Russian",
    "ja": "Japanese",
    "ko": "Korean",
    "it": "Italian",
    "pt": "Portuguese",
    "ur": "Urdu",
    "bn": "Bengali",
    "vi": "Vietnamese",
}

def translate_text(text, src_lang, tgt_lang):
    if src_lang not in SUPPORTED_LANGUAGES or tgt_lang not in SUPPORTED_LANGUAGES:
        return {"error": f"Language pair not supported. Supported languages are: {SUPPORTED_LANGUAGES}"}

    # Set the source language
    tokenizer.src_lang = src_lang
    # Tokenize the input text
    inputs = tokenizer(text, return_tensors="pt", padding=True)

    # Generate translation
    generated_tokens = model.generate(
        **inputs,
        forced_bos_token_id=tokenizer.get_lang_id(tgt_lang)
    )
    # Decode the translation
    translated_text = tokenizer.decode(generated_tokens[0], skip_special_tokens=True)
    return {"translated_text": translated_text}

@app.route('/api/translate', methods=['POST'])
def api_translate():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({"error": "Invalid JSON data"}), 400

        text = data.get('text')
        src_lang = data.get('src_lang')
        tgt_lang = data.get('tgt_lang')

        if not text or not src_lang or not tgt_lang:
            return jsonify({"error": "Missing 'text', 'src_lang', or 'tgt_lang' in request data"}), 400

        translation_result = translate_text(text, src_lang, tgt_lang)
        return jsonify(translation_result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True,port=8080)
