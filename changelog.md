# Change Log

Team membership: 
  Calvin Lai - CL
  Alex Yang - AY
Changelog format: 
  [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 
Coding Style Conventions: 
  Allman Notation indentation style

# [Unreleased]
# [0.0.6] 2018-10-26
## Modified by Calvin
###component/footer.html
- fixed broken social media icons
- removed blog posts section
- slight edits to footer text
###navbar.html
- swapped placeholder logo with actual logo, needs further work
## Added by Alex
###contact.component.ts
- added call to google scripts

# [0.0.5] 2018-10-26
## Added by Calvin
###pending-table-entry component
- added to handle pending requests in the admin console
###admin-console view
- view reached upon successful admin login
- added some verification via local storage, redirects on invalid access
## Modified by Calvin
###admin.component.ts
- added routing for successful login

# [0.0.4] 2018-10-26
## Added by Calvin
###components/payment
- added braintree
###assets
- logo image
## Modified by Calvin
###test-form.component.html
- added button for payments

# [0.0.3] 2018-10-25
## Modified by Calvin
###services/bookings.service.ts
- completed a getBookings function
- added a send email confirmation function
- inserting to database now uses push() instead of set()
### test-form.component.ts
- function updated to check for existing bookings
- now only inserts booking request if booking does not already exist

# [0.0.2] 2018-10-25
## Modified by Calvin
### .gitignore
- updated to ignore node_modules and list directories
## Added by Calvin
### gh-pages
- page now live and accessible at clai94.github.io/ada-artistry

# [0.0.1] 2018-10-23
## Repository changes by Calvin
### Branch management
- merged frontend branch to develop
- merged firebaseAuth branch to develop
- master branch merged with develop
- outdated and unused branches deleted
