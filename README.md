# ButtonStrip.js <img src="https://cloud-space.smartelephantapps.com/buttonstripjs/logo.jpg" align="right" width="200">

A JavaScript library to create easily a strip of buttons.

### Applied Skills

- [x] Webpack 5 (Library Mode)
- [x] Prettier Config
- [ ] Husky Git Hooks
- [ ] ESLint Integration
- [ ] Babel Integration
- [ ] TypeScript Declarations
- [ ] Unit-Testing with Jest
- [ ] Cypress E2E-Testing
- [ ] Storybook
- [ ] NPM Upload
- [ ] GitHub Workflow / NPM CI/CD
- [x] Create Awesome Logo

![Alt Text](https://cloud-space.smartelephantapps.com/buttonstripjs/preview60fps.gif)

```html
<!doctype html>
<html>
  <head>
    <title>Page Title</title>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Khula:400,700');
      .button-strip {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 340px;
        height: 55px;
        border: 2px solid #1496bd;
        border-radius: 3px;
        display: flex;
      }
      .strip-button {
        background-color: white;
        color: #1496bd;
        width: 50%;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        line-height: 65px;
        transition:
          background-color 0.4s linear,
          color 0.2s linear;
        cursor: pointer;
      }
      .strip-button span {
        color: inherit;
      }
      .strip-button-text {
        font-family: 'Khula', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #1496bd;
        margin: 0px;
        padding: 0px;
      }
      .active-strip-button {
        background-color: #1496bd;
        color: white;
      }
    </style>
  </head>
  <body>
    <div id="content"></div>
    <script src="buttonstrip.min.js"></script>
    <script>
      var bs1 = new ButtonStrip({
        id: 'buttonStrip1',
      });
      bs1.addButton('Options', true, 'click', function () {
        console.log('Hallo Welt!');
      });
      bs1.addButton('Logs', false, 'click', function () {
        console.log('Test');
      });
      bs1.append('#content');
    </script>
  </body>
</html>
```
