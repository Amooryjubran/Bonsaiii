import React, { useState, useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const func = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setTimeout(func, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};
