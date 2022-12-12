# triplus

## 🎨 Figma

- [Link](https://www.figma.com/file/Qcxn5LaToq0uhbrvZeHwl8/Untitled?t=254MQgkNmEv6hDyF-0)

<br>

## 📚 issues & Projects

- 기능별 작업 현황 공유: [issues](https://github.com/9ivot/triplus/issues)

<br>

## 🔖 Wiki

- [회의록 링크](https://github.com/9ivot/triplus/wiki)

<br>

## ❗ 커밋 컨벤션

```plain text
type: short summary

# type: 커밋 타입
# short summary: 커밋에 대한 간단한 설명
```

- 예시

```bash
feat: 라이트 모드 기능 추가
```

### 커밋 타입

| 커밋     | 타입 설명                                                                                        |
| :------- | :----------------------------------------------------------------------------------------------- |
| docs     | 문서 수정(md 파일 등)                                                                            |
| feat     | 새로운 기능 추가                                                                                 |
| style    | 스타일 변경 (포매팅 수정, 들어쓰기 추가, 빈칸 제거, 스펠링 오류 등)                              |
| refactor | 리팩토링 작업(코드 동작은 유지하되, 코드의 가독성 및 유지보수성을 향상시키기 위한 내부구조 변경) |
| fix      | 버그 수정                                                                                        |
| revert   | 커밋 취소(reset 사용금지)                                                                        |
| test     | 테스트 코드 추가, 기존 테스트 수정                                                               |
| build    | 빌드 관련 파일 수정 (패키지 매니저 설정등 개발코드와 무관한 부분)                                |

<br>

### 커밋 설명 규칙

- 명령조의 현재시제를 사용한다 (과거형이나 3인칭 사용X)
  - changed(x), changes(x)
  - change(o)
- 첫 글자는 항상 소문자로 기재한다
- 마침표를 찍지 않는다
- 커밋 메시지의 각 줄은 50자를 넘기지 않는다

<br>

## 🔃 Branch 전략

```mermaid
gitGraph
      commit
       commit
       branch develop
       commit
       checkout develop

       commit
       commit
          branch main_forked
          commit
       checkout main_forked
        commit
        commit
        branch feat/func1
        commit
        checkout feat/func1
        commit
        commit
        commit
```

- main repo > main branch: 배포용
- main repo > develop branch: 개발용 (여기서 개발완료시 main repo의 main branch로 PR하여 배포)
- forked repo > main branch
- forked repo > feat/func1 : 기능별 구현시 main repo의 develop branch로 PR
- 기능별 구현을 할때마다 PR (커밋을 모아서 PR하기를 권장)

<br><br>

# 프로젝트 설명은 아래에 기재
