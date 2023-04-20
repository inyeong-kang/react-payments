## 기능 목록

1. 카드 등록 기능 구현
2. 등록된 카드 목록을 보여주는 기능 구현
3. 카드 번호 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 숫자 4개를 입력하면 다음칸으로 넘어가는 기능
   - 마지막 8개 숫자는 보이지 않게 제한
4. 만료일 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 숫자 2개를 입력하면 다음칸으로 넘어가는 기능
5. 소유자 이름 입력기능 구현
   - 0부터 30자 까지만 입력할 수 있게 제한
   - 문자만 입력할 수 있게 제한
6. 보안코드 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 3자리만 입력할 수 있게 제한
7. 비밀번호 입력기능 구현
   - 숫자만 입력 할 수 있게 제한 ( 숫자가 아닌 값이 들어가면 화면에 보여지지 않게 )
   - 숫자 1개를 입력하면 다음칸으로 넘어가는 기능
8. 입력한 정보가 카드에 반영되는 기능 구현 (입력될 때마다)
9. 필수로 입력되어야하는 값이 입력되지 않았을 때 "다음"버튼을 보이지 않게
10. 필수 입력값이 유효성겁사를 통과했을 때 통과되었다는 체크 표시

## 디렉토리 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜backButton.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜cardItem.tsx
 ┃ ┃ ┣ 📜countText.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┗ 📜InputBox.tsx
 ┃ ┣ 📜addCardForm.tsx
 ┃ ┣ 📜cardNumber.tsx
 ┃ ┣ 📜cardPassword.tsx
 ┃ ┣ 📜expiredDate.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜securityCode.tsx
 ┃ ┗ 📜userName.tsx
 ┣ 📂constants
 ┃ ┣ 📜errors.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜inputInfo.ts
 ┣ 📂contexts
 ┃ ┣ 📜cardInfo.tsx
 ┃ ┗ 📜validate.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useCountText.ts
 ┃ ┣ 📜useError.ts
 ┃ ┣ 📜useInputCode.ts
 ┃ ┣ 📜useInputDate.ts
 ┃ ┣ 📜useInputName.ts
 ┃ ┣ 📜useInputNumber.ts
 ┃ ┗ 📜useInputPassword.ts
 ┣ 📂pages
 ┃ ┣ 📜addCard.tsx
 ┃ ┗ 📜cardList.tsx
 ┣ 📂stories
 ┃ ┗ 📜NameInput.stories.tsx
 ┣ 📂styles
 ┃ ┣ 📜global-style.ts
 ┃ ┗ 📜variables.js
 ┣ 📂type
 ┃ ┣ 📜input.ts
 ┃ ┗ 📜validator.ts
 ┣ 📂utils
 ┃ ┣ 📜formData.ts
 ┃ ┗ 📜localStorage.ts
 ┣ 📂validation
 ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```
