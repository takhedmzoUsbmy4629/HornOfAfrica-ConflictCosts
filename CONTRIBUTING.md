# Contributing to The True Cost of War in the Horn of Africa

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Ways to Contribute

### 1. Adding or Updating Data

If you have reliable data on conflict costs in the Horn of Africa:

- **Source Requirements**: All data must come from credible sources (academic papers, reputable international organizations, verifiable government documents)
- **Formatting**: Follow the existing data structure in `js/data/conflict-data.js`
- **Documentation**: Include full citations for all sources

### 2. Code Contributions

If you're improving the website's functionality:

- **HTML/CSS**: Maintain responsive design and accessibility
- **JavaScript**: Keep code readable and well-commented
- **Testing**: Test on multiple devices and browsers before submitting

### 3. Translation

Help make this information accessible in regional languages:

- **Available Languages**: We're particularly interested in translations to Amharic, Tigrinya, Somali, Arabic, and Oromo
- **Process**: Submit an issue first to coordinate translation efforts

### 4. Documentation

Improvements to documentation are always welcome:

- **Readme Updates**: Clarifications, better explanations
- **Tutorials**: How to use the site for specific purposes (education, research, etc.)

## Contribution Process

### For Data Contributions

1. Open an issue describing the data you want to add
2. Include sources and preliminary figures
3. Wait for feedback from maintainers
4. Prepare a pull request if approved

### For Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request with a clear description

## Pull Request Guidelines

- Keep PRs focused on a single issue or feature
- Include screenshots for UI changes
- Update documentation as needed
- Be open to feedback and be prepared to make requested changes

## Code of Conduct

- **Factual Approach**: Focus on verifiable data, not political opinions
- **Respectful Communication**: Be respectful in all interactions
- **Educational Purpose**: Remember this project aims to educate, not inflame tensions

## Development Setup

To work on this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/takhedmzoUsbmy4629/HornOfAfrica-ConflictCosts.git
   cd HornOfAfrica-ConflictCosts
   ```

2. Open `index.html` in your browser to view the site locally

3. Make your changes to the relevant files:
   - HTML structure in `index.html`
   - Styling in `css/styles.css`
   - Data in `js/data/conflict-data.js`
   - Functionality in the appropriate JS files

4. Refresh your browser to see changes

## Adding New Conflicts

To add a new conflict to the visualization:

1. Add the conflict data to the `conflictData` object in `js/data/conflict-data.js`
2. Follow the existing structure for consistency
3. Update the total costs if necessary
4. Add any required images to the `images/` directory

## Questions?

If you have questions about contributing, please open an issue labeled "question" in the repository.

Thank you for helping to document the true costs of war in the Horn of Africa. Your contributions help build a more informed dialogue about regional peace and stability.