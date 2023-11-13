## next.js를 이용한 포토폴리오 사이트 만들기
당신이 작업할 때 도움이 될만한 JavaScript 라이브러리 중 하나인 Next.js는 React 애플리케이션을 쉽게 구축하고 관리할 수 있게 해주는 프레임워크입니다. 서버 측 렌더링, 정적 파일 생성, 코드 분할, 라우팅 등의 기능을 제공하여 개발자들이 React 애플리케이션을 구축하는 데 도움이 되는 다양한 기능을 제공합니다.<br/>

1. 서버 측 렌더링: 페이지를 서버 측에서 초기 렌더링하여 SEO에 더 유리하고 초기 페이지 로딩 시간을 줄여줍니다.
2. 정적 파일 생성: 사전 렌더링을 통해 정적 파일을 생성하여 빠른 페이지 로딩을 가능케 합니다.
3. 코드 분할: 페이지 간 코드를 자동으로 분할하여 사용자에게 필요한 코드만 전송하므로 초기 로딩 시간을 최소화합니다.
4. API 라우팅: API 라우트를 쉽게 생성하여 서버리스 함수로 엔드포인트를 만들 수 있습니다.
5. 빠른 개발: 간단한 설정으로 빠른 개발을 가능케 하는데 초점을 맞추고 있습니다.
<br/>
프레임워크는 React를 기반으로 하며, React의 컴포넌트 기반 접근 방식을 유지하면서 추가적인 기능을 제공합니다. 이를 통해 개발자는 복잡한 설정 없이도 빠르게 애플리케이션을 구축할 수 있습니다.

# 미리보기
미리보기 : https://next-project-virid-two.vercel.app/

# 셋팅
1. 설치하기 `npx create-next-app@latest`
2. 설정내용<br />
<br />
PS C:\Users\line\Desktop\WEBS0106\next-project> npx create-next-app@latest<br />
Need to install the following packages:<br />
create-next-app@14.0.2<br />
Ok to proceed? (y) y<br />
√ What is your project named? ... .<br />
√ Would you like to use TypeScript? ... "No" / Yes<br />
√ Would you like to use ESLint? ... No / "Yes"<br />
√ Would you like to use Tailwind CSS? ... "No" / Yes<br />
√ Would you like to use `src/` directory? ... No / "Yes"<br />
√ Would you like to use App Router? (recommended) ... No / "Yes"<br />
√ Would you like to customize the default import alias (@/*)? ... No / "Yes"<br />
√ What import alias would you like configured? ... "@"/*<br />
Creating a new Next.js app in C:\Users\line\Desktop\WEBS0106\next-project.<br />
<br />
Using npm.<br />
<br />
Initializing project with template: app<br />
<br />
<br />
Installing dependencies:<br />
- react<br />
- react-dom<br />
- next<br />
<br />
Installing devDependencies:<br />
- eslint<br />
- eslint-config-next<br />
<br />
<br />
added 273 packages, and audited 274 packages in 3m<br />
<br />
106 packages are looking for funding<br />
  run `npm fund` for details<br />
<br />
found 0 vulnerabilities<br />
Initialized a git repository.<br />
<br />
Success! Created next-project at C:\Users\line\Desktop\WEBS0106\next-project<br />

3. 사이트 열기 `npm run dev`<br />

PS C:\Users\line\Desktop\WEBS0106\next-project> npm run dev<br />

> next-project@0.1.0 dev<br />
> next dev<br />
<br />
   ▲ Next.js 14.0.2<br />
   - Local:        http://localhost:3000<br />

Attention: Next.js now collects completely anonymous telemetry regarding usage.<br />
This information is used to shape Next.js' roadmap and prioritize features.<br />
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:<br />
"url 주소"<br />

 ✓ Ready in 3.5s<br />
 ○ Compiling / ...<br />
 ✓ Compiled / in 4.3s (517 modules)<br />
 ○ Compiling /favicon.ico ...<br />
 ✓ Compiled /favicon.ico in 1721ms (513 modules)<br />

# 설치
1. gsap 설치 `npm i gsap`
2. sass 설치 `npm i sass`
3. lenis 설치 `npm i @studio-freight/lenis`
