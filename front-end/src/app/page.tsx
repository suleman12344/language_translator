"use client";
import React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import TypingAnimation from "@/components/ui/typing-animation";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
export default function Home() {
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  function translated_textFunction() {
    fetch("http://127.0.0.1:8080/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        src_lang: sourceLanguage,
        tgt_lang: targetLanguage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTranslatedText(data.translated_text);
        console.log(translatedText);
      });
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-5">
      <TypingAnimation className="text-5xl">
        What is your language?
      </TypingAnimation>
      <Select onValueChange={(value) => setSourceLanguage(value)}>
        <SelectTrigger className="w-96">
          <SelectValue placeholder="Please select your language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="ur">Urdu</SelectItem>
          <SelectItem value="hi">Hindi</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
          <SelectItem value="ar">Arabic</SelectItem>
          <SelectItem value="zh">Chinese</SelectItem>
          <SelectItem value="ru">Russian</SelectItem>
          <SelectItem value="ja">Japanese</SelectItem>
          <SelectItem value="ko">Korean</SelectItem>
          <SelectItem value="it">Italian</SelectItem>
          <SelectItem value="bn">Bengali</SelectItem>
          <SelectItem value="vi">Vietnamese</SelectItem>
          <SelectItem value="pt">Portuguese</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        className="w-96"
        placeholder="Type your message here."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="font-semibold">In which language you want to translate?</p>

      <Select onValueChange={(value) => setTargetLanguage(value)}>
        <SelectTrigger className="w-96">
          <SelectValue placeholder="Please select your language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="ur">Urdu</SelectItem>
          <SelectItem value="hi">Hindi</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
          <SelectItem value="ar">Arabic</SelectItem>
          <SelectItem value="zh">Chinese</SelectItem>
          <SelectItem value="ru">Russian</SelectItem>
          <SelectItem value="ja">Japanese</SelectItem>
          <SelectItem value="ko">Korean</SelectItem>
          <SelectItem value="it">Italian</SelectItem>
          <SelectItem value="bn">Bengali</SelectItem>
          <SelectItem value="vi">Vietnamese</SelectItem>
          <SelectItem value="pt">Portuguese</SelectItem>
        </SelectContent>
      </Select>
      <InteractiveHoverButton
        text="Submit"
        className="w-96"
        onClick={() => {
          translated_textFunction();
        }}
      ></InteractiveHoverButton>
      <p className="text-gray-400">Translated text</p>
      <p>{translatedText}</p>
    </main>
  );
}
