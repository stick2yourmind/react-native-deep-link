# Deep link - Testing

  ```  npm i ```

  ```  npx expo start -c ```

  ``` npx uri-scheme open "exp://<IP>:<PORT>/--/home" --android ```

  ``` npx uri-scheme open "exp://<IP>:<PORT>/--/product/id=jwt" --android ```

# Deep link - Apk preview

  ``` npx eas build -p android --profile preview ```

  Then download & install the apk
  
  Use an anchor link embebbed into an html with href=myapp://product/jwt