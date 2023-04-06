export const renderHtml = (app: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Web site rendered from a Lambda Function" />
    <title>React App Rendered on Server</title>
  </head>
  ${app}
</html>`
};
