# 🧑‍🚀 42 Automated Portfolio

<div align=center>
  
  [![forthebadge](https://forthebadge.com/images/badges/built-by-codebabes.svg)](https://forthebadge.com)

  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/angelamcosta/42automated-portfolio" /> <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/angelamcosta/42automated-portfolio" /> <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/angelamcosta/42automated-portfolio" /> <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/angelamcosta/42automated-portfolio" /> <img alt="Github License" src="https://img.shields.io/github/license/angelamcosta/42automated-portfolio" /> <a href="https://wakatime.com/badge/user/0c29d5b3-c30b-4e1a-ad07-2da3bd4f7e05/project/838a8dca-4670-4b62-8af7-6c3f9e085c03"><img src="https://wakatime.com/badge/user/0c29d5b3-c30b-4e1a-ad07-2da3bd4f7e05/project/838a8dca-4670-4b62-8af7-6c3f9e085c03.svg" alt="wakatime"></a>

  ![index Screenshot](https://raw.githubusercontent.com/angelamcosta/42automated-portfolio/main/files/index.png)
</div>

## Description

This project is a hackathon submission for the [Easter Hackathon](https://raw.githubusercontent.com/angelamcosta/42automated-portfolio/main/files/Easter_Hackathon_-_Instructions.pdf) event at 42 Lisbon. It is an automated personal portfolio for each 42 student, using the 42 API to fetch user information and display it on a user-friendly website.

## Features

- Automatic generation of personalized portfolios based on a student's 42 profile
- Real-time updates of portfolio content based on changes to a student's 42 profile

## Getting Started

To get started with 42 Automated Portfolio, follow these steps:

1. Clone the repository:

	```
		git clone https://github.com/angelamcosta/42automated-portfolio.git
	```

2. Install the required dependencies:


	```javascript
		npm install
	```

3. Set up environment variables using the key and secret you've created

4. Enter your 42 API credentials in the `.env` file in the server folder (you have to create this file).

5. Start the development server:

	```javascript
		npm run start
	```

## Creating an API key on the 42 API

To use the 42 API, you will need an API key. Here's how you can create one:

1. Go to the 42 API website.

2. Log in with your 42 credentials.

3. Click on your profile picture in the top right corner.

4. Select Applications from the dropdown menu.

5. Click on the New application button.

6. Fill in the required information, such as the name of your application and the website URL.

8. Click on the Create button to create your application.

9. Your API key and secret will be displayed.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (in the server folder)

`CLIENT_ID`

`CLIENT_SECRET`

`REDIRECT_URI`

## Usage

To use the portfolio site, simply enter a 42 student's login or name into the search bar. The site will fetch the user's information from the 42 API and display it on the page.

## Example Screenshot

This screenshot shows an example of the app in action. In this particular view, a porfile if shown after a successful search. 

![Example Screenshot](https://raw.githubusercontent.com/angelamcosta/42automated-portfolio/main/files/screenshot.png)

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your code is well-documented and follows the project's coding standards.

## Credits

This project was created by Angela Lima, [angelamcostalima@icloud.com](angelamcostalima@icloud.com).

This project uses a modified version of the [bootstrap template](https://bbbootstrap.com/snippets/bootstrap-5-profile-card-animation-74461039) of [@upasana-chauhan33918](https://bbbootstrap.com/users/upasana-chauhan33918).

## License

This project is licensed under the [MIT License](https://github.com/angelamcosta/42automated-portfolio/blob/main/LICENSE).
