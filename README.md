###### Other Language
[English](https://github.com/dkssud-dus/webRedesign-NASA/blob/main/README_en.md) | [한국어](https://github.com/dkssud-dus/webRedesign-NASA/blob/main/README.md) | [日本語](https://github.com/dkssud-dus/webRedesign-NASA/blob/main/README_ja.md)

<br/><br/><br/>

# Title
![1](https://github.com/user-attachments/assets/40fa48b3-73f0-49b1-ba25-9f9b40a922d4)

<br/><br/>

**Three.js를 활용해 자전하는 지구와 인터랙션을 구현한 NASA 웹 리디자인 프로젝트**
> 해당 프로젝트는 NASA의 ‘우주적 상징성’과 ‘브랜드 가치’를 웹 환경에서 더욱 효과적으로 전달하기 위한 리디자인 작업입니다. 기존 사이트의 과도한 외부 콘텐츠와 무질서한 정보 배치를 개선하고, NASA의 비전과 미션을 강조하는 콘텐츠 흐름을 설계했습니다. 메인 비주얼로 삽입된 자전하는 지구와 스크롤 기반 인터랙션은 사용자가 ‘지구를 떠나는 우주비행사’의 시각적 경험을 할 수 있도록 기획되었습니다.

<br/><br/><br/>

## Link
- 바로가기 (Web-site): https://dkssud-dus.github.io/webRedesign-NASA/
- 기획서 (Figma Slide): https://www.figma.com/deck/Tw2G6yCKO9KrGJ4zhjOzUH/-webRedesin--NASA--Project-Brief-?node-id=20-20&t=2n4g4ziiCtdVFok9-1
- 디자인 시안 (Figma): https://www.figma.com/design/cM77aRt8LS2gmufoXWnphR/-webRedesin--NASA--Design-Brief-?node-id=3-2&t=7sNxJu6YNCSrJyUJ-1

<br/>

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Environment & Contribution](#environment--contribution)
- [Contact](#contact)

<br/>

## Overview
### Background
NASA(미국 항공우주국)는 전 세계적으로 잘 알려진 국가 기관이며, 우주 탐사 및 항공 기술 연구를 선도해왔다. 그러나 공식 웹사이트는 그에 걸맞은 브랜드 가치와 상징성을 충분히 전달하지 못하고 있다.

<br/>

현재 웹사이트는 다음과 같은 문제를 지닌다.

<br/>

- NASA의 미션이나 비전, 상징성이 전면에 드러나지 않음
- 뉴스레터, 팟캐스트, 외부 콘텐츠(넷플릭스 등)의 과도한 배치
- 주요 콘텐츠 간의 정보 구조와 순서가 무질서하여 사용자 경험 저하
- '우주'라는 핵심 키워드를 시각적으로 표현하지 못한 채, 정적이고 몰입감이 떨어지는 웹 구성
  
<br/>

### Purpose
이 프로젝트는 NASA의 **우주적 상징성과 가치**를 시각적으로 강조하고, 정보 구조를 개선하여 사용자가 더 명확하게 브랜드를 인지하고 몰입할 수 있도록 만드는 것을 목표로 한다.

<br/>

### Keywords
`정보 구조 / 레이아웃의 단순화`
- 현재의 복잡한 정보 배치를 재구성하여, 사용자가 핵심 정보를 빠르게 파악할 수 있도록 한다.     
- 내용의 우선순위를 조정하고, 필요성이 낮은 섹션은 과감히 제거한다.            
  
`브랜드 이미지 및 가치 강조`
- NASA의 영향력, 상징성, 비전을 메인 화면에서 직관적으로 전달한다.      
- three.js를 활용하여, NASA의 우주 이미지와 철학을 몰입도 있게 표현한다.      

`지구를 떠나는 우주비행사`
- 사용자의 웹 사이트 몰입을 위한 컨셉으로, 시각적 즐거움을 제공할 수 있도록 한다.      
- NASA의 우주 탐사 프로젝트를 상기시킨다.

<br/>

### Schedule
- 2025.06.30. - 2025.07.08.
- Total 21 - 22 Hours

<br/>

### Before & After
| Before | After |
|--------|-------|
| ![기존 웹사이트](https://github.com/user-attachments/assets/a32a7351-ef3f-4619-ad4e-827daf142238) | ![6](https://github.com/user-attachments/assets/d77dc4f8-545c-4bac-8a0b-6447fd7195a4) ![image](https://github.com/user-attachments/assets/879074f7-4c04-417b-9ccc-d37bf5512b59) |

<br/>

## Tech Stack
**Design / Prototyping** 
- Figma
- Notion
  
**Frontend** 
- HTML
- SCSS (CSS Preprocessor)
- JavaScript
- Three.js

**Development Environment** 
- VS Code

**Deployment / CI**
- GitHub Pages  

<br/>

## Features
### Core Feature
`자전하는 지구`
- 메인 비주얼 및 가치관, 뉴스 섹션에 자전하는 지구 모델을 삽입한다.
- 지구는 낮 / 밤이 조명에 따라 텍스처가 조화롭게 섞이도록 한다.
- 구름 및 대기가 지구와 속도는 다르지만 함께 돌도록 한다.

`스크롤 시 반응하는 지구의 스케일 / 위치`
- 지구 모델은 스크롤 시 스케일이 줄어들거나 위치 값이 변하는 등 반응한다.
- 키워드인 '지구를 떠나는 우주비행사'에 부합하는 기능이다.

<br/>

> `Three.js`의 학습과 함께한 프로젝트로, 학습 기록은 Notion에 정리하였다.

<br/>

<details>
  <summary>Notion Link</summary>

<br/>

- [Three.js 기본 개념 이해하기 - 회전하는 큐브 만들기](https://buttoned-gibbon-63a.notion.site/Three-js-225f5057cabe80f6afffd428c29402b1?source=copy_link)
- [Three.js 자전하는 지구 만들기](https://buttoned-gibbon-63a.notion.site/Three-js-225f5057cabe801a8be6f7b72dbbee36?source=copy_link)
- [Three.js 셰이더 사용해서 자전하는 지구 만들기](https://buttoned-gibbon-63a.notion.site/Three-js-225f5057cabe80508daceeac924d89a4?source=copy_link)

<br/>

</details>

<br/>

### [Main Page](https://dkssud-dus.github.io/webRedesign-NASA/)

<details>
  <summary>Click to expand</summary>

<br/>

![1](https://github.com/user-attachments/assets/40fa48b3-73f0-49b1-ba25-9f9b40a922d4)

### Header + Main visual
**Purpose**
- NASA의 브랜드 이미지와 메인 비주얼을 강조한다.

**Summary**
- Three.js를 사용하여 지구 모델을 불러온 후 카메라 위치를 가깝게 설정하였다.
- 지구 모델을 강조하기 위해서 캐치 프레이즈 / 내비게이션 / 검색 박스는 무채색으로 두었으며, 최대한 힘을 빼도록 하였다.

<br/><br/>

![2](https://github.com/user-attachments/assets/a143b5b0-26b0-44ab-a246-dc240b5f6c2a)

### About - What Does NASA Do?
**Purpose**
- NASA의 가치, 영향력을 제시하여 사용자가 알기 쉽도록 한다.

**Summary**
- 스크롤 시 메인 비주얼의 지구 모델이 줄어들며 그라데이션이 적용된 오버레이가 드러나 텍스트를 더 쉽게 읽을 수 있도록 하였다.

<br/><br/>

![3-1](https://github.com/user-attachments/assets/1c0460c9-023d-4056-a2d2-910e30dd7678)
<br/>
![3-2](https://github.com/user-attachments/assets/ba022c64-e3ab-461c-99ae-74e1a71a4d39)

### About Details & Modal
**Purpose**
- NASA의 가치와 영향력을 세부적으로 확인할 수 있는 섹션이며, 모달 형태로 열려 페이지내 이동을 최소화한다.

**Summary**
- 스크롤 시 지구 모델이 화면에 전체가 보이도록 줄어들며 가치와 영향력의 키워드가 원형을 따라 배치되어 있도록 하였다.     
- 각 키워드를 클릭하면 모달이 화면에 꽉 차게 팝업되며, 하단 중앙의 Return to NASA Do로 돌아갈 수 있도록 하였다.         
   - 각 키워드마다 레이아웃을을 다르게 적용하였으며, 오버레이의 형태도 다르게 설정하였다.       
   - 모달이 팝업되었을 때 숫자 카운트 업 / 비디오 자동 재생 등의 효과를 넣어 시각적인 효과를 더했다.       

<br/><br/>

![4](https://github.com/user-attachments/assets/a6ddf179-f1fe-469b-b3c3-62c97e53853a)

### Our Mission
**Purpose**
- 현재, 미래의 NASA의 미션에 대한 섹션이며 이해를 돕기 위한 짧은 설명과 풀페이지 이미지로 구현한다.

**Summary**
- 스크롤 시 Our Mission 섹션이 `↑` 방향으로 등장하며, 스와이퍼를 화면에 꽉 차게 두었다.
- 이때에는 섹션 콘텐츠가 지구를 가리도록 구현하였다.

<br/><br/>

![5](https://github.com/user-attachments/assets/96f28620-dd4b-429d-a736-6bcf8ab3420f)

### Notice - Signals From Space
**Purpose**
- 지구 모델과 NASA의 새 소식을 함께 볼 수 있도록 하며, 새 소식은 게시판이나 앨범형의 단순한 형태보다는 사용자와 상호작용이 필요하도록 디자인한다.

**Summary**
- 스크롤 시 점점 작아진 지구는 화면 우측에 배치되어 소식과 지구를 2단으로 볼 수 있도록 하였다.
- 각 소식 카드 호버 시 영역이 늘어나 한 문단 전체가 보이며, 이미지 또한 등장하도록 하였다.

<br/><br/>

![6](https://github.com/user-attachments/assets/ea73e5dd-24cd-4064-8901-d7c4721e921e)

### Promotion - Join us on our journey
**Purpose**
- 비교적 상단에 배치되었던 콘텐츠 홍보 섹션을 가장 하단에 내리면서도, 흐름에 어긋나지 않도록 한다.

**Summary**
- 스크롤 시 점점 작아진 지구는 우측 상단에 고정되어 아주 작은 사이즈로 보이게 된다.    
   - 이는 보이저 1호의 창백한 푸른 점에서 착안한 디자인이다.    
   - NASA의 여행은 앞으로도 계속 될 것이며, 그 여행에 사용자도 함께 하길 바란다는 이야기를 담으려고 하였다.    
- 팟캐스트 / 뉴스레터 / NASA + 라이브는 모두 카드 형태로 디자인되었다.    

<br/><br/>

![7](https://github.com/user-attachments/assets/2d083111-43a2-4015-91ed-65223148341a)

### Footer + Top Button
**Purpose**
- 캐치프레이즈와 심볼으로 사용자에게 NASA 이미지를 각인한다.

**Summary**
- 푸터는 SNS와 캐치프레이즈 / 심볼의 3단 구성으로 구현하였다.
- 탑 버튼은 가장 맨 위, 메인 비주얼의 큰 지구 이미지로 돌아가는 것이기 때문에 '지구로 귀환한다'는 의미를 담은 로켓 아이콘을 사용하였다.

<br/>

</details>

<br/>

## Environment & Contribution
- OS: Windows 11, Windows 10
- Viewpoint: Desktop(1980px)
- Contribute: 100% 개인 작업 (기획, 디자인, 개발)

<br/>

## Contact
- GitHub: https://github.com/dkssud-dus
- Email: chae3929@gmail.com
- LinkedIn: https://www.linkedin.com/in/dkssud-chaeyeon/

<br/>
<br/>
<br/>
