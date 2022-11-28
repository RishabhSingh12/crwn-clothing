# **Crwn-Clothing webshop**

## Description -

An e-commerce cloth store webaite which contains different categories of cloth items where users can signin / signup , view different categories of items , add/checkout items from cart and make orders from the site.

### **Tech Stack Used -**

- **Reactjs (v.17.0.2)**
- **Firebase(v.9.6.6)**
- **Styled components(v4.3.3)**
- **redux(v.4.1.2)**
- **sass(v.1.49.4)**
- **react-router-dom(v.6.0.0)**

&nbsp;

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Features-**

- Login/Signup for the store done using firebase authentication service.

- Viewing of different item-directories, category-items and component items with assets and data stored on firestore db

- Complete cart functionality for adding and checkout items and manipulating items quanity.

- State management of app done using redux and orders history page available for the successful orders.

&nbsp;

## **Live preview of the application -**

### [Crwn-Cloth-Store](https://crwn-clothingshop.netlify.app)

&nbsp;

## **Image preview of the application-**

## **ItemsDirectory-**

![ItemsDirectory](markdown_assets/directory.png.png)

## **CategoryItems Preview -**

![Category-directories](markdown_assets/large.png.png)

## **Login/Signup Preview -**

![Login/Signup](markdown_assets/login-signup.png.png)

## **Orders Preview -**

![Orders](markdown_assets/orders.png.png)

## **CheckoutItems Preview -**

![Checkout](markdown_assets/checkout.png)

## **Component Preview -**

![Component](markdown_assets/component.png)

&nbsp;

**_Future Updates-_**

- Will make the site responsive for all the screens.

- Add a new dummy payment gateway for making orders

&nbsp;

## `Feel free to give suggestions and advices` 😀

&nbsp;

&nbsp;

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push your own code, you'll need to fork the project first. Forking allows you to have your own copy of this repository by adding a duplicate version in your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

<img width="612" alt="github fork" src="https://user-images.githubusercontent.com/10578605/157998981-4bfd1f83-825c-4664-b22d-b2c7d471dc70.png">

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!

# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Set your firebase config

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">

# Branching strategy

After forking this repository and cloning it down, you will have access to all the lesson branches with code at different checkpoints throughout the course. If for some reason you need to work from the codebase at one of these lesson branch checkpoints, follow these steps:

1. Checkout to the lesson-# (let's use lesson-15 as an example) branch

```
git checkout lesson-15
```

2. Branch off from lesson-15. This will create a new branch where the code of lesson-15 is the basis for your new branch. You can name your new branch whatever you want! Let's say we use my-main-branch as the name.

```
git checkout -b my-main-branch
```

3. Now you can just code on this branch, push code from this branch up to your forked repo etc. The main thing to remember is that you want to be on this branch for your own code, so remember what you named this branch!
