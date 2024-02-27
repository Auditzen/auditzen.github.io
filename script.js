// Add to script.js

// Sample data for categories, subcategories, and tags
const categoriesData = [
    { name: 'Financial Audits', id: 'financial-audits' },
    { name: 'Compliance Audits', id: 'compliance-audits' },
    { name: 'Operational Audits', id: 'operational-audits' },
    { name: 'Risk Management Audits', id: 'risk-management-audits' }
];

const subcategoriesData = [
    { name: 'Annual Financial Statements', parentId: 'financial-audits' },
    { name: 'Tax Audits', parentId: 'financial-audits' },
    { name: 'GST Compliance', parentId: 'compliance-audits' },
    // Add more subcategories as needed
];

const tagsData = [
    { name: 'Balance Sheet', parentId: 'annual-financial-statements' },
    { name: 'Income Tax Returns', parentId: 'tax-audits' },
    { name: 'GST Returns Filing', parentId: 'gst-compliance' },
    // Add more tags as needed
];

// Function to populate categories
function populateCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    categoriesData.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category.name;
        categoryList.appendChild(li);
    });
}

// Function to populate subcategories
function populateSubcategories() {
    const subcategoryList = document.getElementById('subcategory-list');
    subcategoryList.innerHTML = '';
    subcategoriesData.forEach(subcategory => {
        const li = document.createElement('li');
        li.textContent = subcategory.name;
        subcategoryList.appendChild(li);
    });
}

// Function to populate tags
function populateTags() {
    const tagList = document.getElementById('tag-list');
    tagList.innerHTML = '';
    tagsData.forEach(tag => {
        const li = document.createElement('li');
        li.textContent = tag.name;
        tagList.appendChild(li);
    });
}

// Populate categories, subcategories, and tags on page load
window.addEventListener('load', () => {
    populateCategories();
    populateSubcategories();
    populateTags();
});
      // Add to script.js

// Sample data for checklists and templates
const checklistsTemplatesData = [
    { title: 'Sample Financial Audit Checklist', category: 'Financial Audits', subcategory: 'Annual Financial Statements', tags: ['Balance Sheet', 'Profit and Loss Statement'] },
    { title: 'Sample GST Compliance Template', category: 'Compliance Audits', subcategory: 'GST Compliance', tags: ['GST Returns Filing', 'Input Tax Credit Reconciliation'] },
    { title: 'Sample Inventory Management Checklist', category: 'Operational Audits', subcategory: 'Inventory Management', tags: ['Inventory Valuation', 'Stock Reconciliation'] },
    // Add more sample items as needed
];

// Function to populate checklists and templates
function populateChecklistsTemplates() {
    const checklistTemplatesList = document.getElementById('checklists-templates-list');
    checklistTemplatesList.innerHTML = '';
    checklistsTemplatesData.forEach(item => {
        const itemHTML = `
            <div class="checklist-template">
                <h3>${item.title}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Subcategory:</strong> ${item.subcategory}</p>
                <p><strong>Tags:</strong> ${item.tags.join(', ')}</p>
                <button>Download</button>
            </div>
        `;
        checklistTemplatesList.insertAdjacentHTML('beforeend', itemHTML);
    });
}

// Populate checklists and templates on page load
window.addEventListener('load', () => {
    populateChecklistsTemplates();
});
                     // Add to script.js

// Function to handle registration form submission
function handleRegistration(event) {
    event.preventDefault();
    const fullName = event.target.elements.fullname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    // Perform registration logic (e.g., send data to server)
    console.log('Registration:', fullName, email, password);
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    // Perform login logic (e.g., send data to server)
    console.log('Login:', email, password);
}

// Add event listeners for form submissions
document.getElementById('registration-form').addEventListener('submit', handleRegistration);
document.getElementById('login-form').addEventListener('submit', handleLogin);
// Add to script.js

// Function to handle profile information update form submission
function handleProfileUpdate(event) {
    event.preventDefault();
    const fullName = event.target.elements.fullname.value;
    const email = event.target.elements.email.value;
    const newPassword = event.target.elements.password.value;
    // Perform profile update logic (e.g., send data to server)
    console.log('Profile Update:', fullName, email, newPassword);
}

// Add event listener for profile update form submission
document.getElementById('profile-info').addEventListener('submit', handleProfileUpdate);
// Add to script.js

// Sample data for favorites and history
const favoritesData = [
    { title: 'Sample Financial Audit Checklist', category: 'Financial Audits', subcategory: 'Annual Financial Statements' },
    // Add more sample favorites as needed
];

const historyData = [
    { title: 'Sample Inventory Management Checklist', category: 'Operational Audits', subcategory: 'Inventory Management' },
    // Add more sample history items as needed
];

// Function to populate favorites
function populateFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favoritesData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - ${item.category} (${item.subcategory})`;
        favoritesList.appendChild(li);
    });
}

// Function to populate history
function populateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    historyData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - ${item.category} (${item.subcategory})`;
        historyList.appendChild(li);
    });
}

// Populate favorites and history on page load
window.addEventListener('load', () => {
    populateFavorites();
    populateHistory();
});
// Add to script.js

// Sample data for discussion forums and comments
const forumsData = [
    { title: 'Financial Audits Discussion', category: 'Financial Audits' },
    // Add more sample forums as needed
];

const commentsData = [
    { user: 'John', text: 'Great checklist! Thanks for sharing.', forum: 'Financial Audits Discussion' },
    // Add more sample comments as needed
];

// Function to populate discussion forums
function populateDiscussionForums() {
    const discussionForumsDiv = document.getElementById('discussion-forums');
    forumsData.forEach(forum => {
        const forumHTML = `
            <div>
                <h4>${forum.title}</h4>
                <p><strong>Category:</strong> ${forum.category}</p>
                <button>Join Forum</button>
            </div>
        `;
        discussionForumsDiv.insertAdjacentHTML('beforeend', forumHTML);
    });
}

// Function to populate comments
function populateComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';
    commentsData.forEach(comment => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${comment.user}:</strong> ${comment.text}`;
        commentsList.appendChild(li);
    });
}

// Function to handle comment submission
function handleCommentSubmission(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text').value;
    // Perform comment submission logic (e.g., send data to server)
    console.log('Comment Submitted:', commentText);
    // Reset the comment input field after submission
    document.getElementById('comment-text').value = '';
    // Add the new comment to the comments list (simulated for demonstration)
    const commentsList = document.getElementById('comments-list');
    const newComment = document.createElement('li');
    newComment.innerHTML = `<strong>User:</strong> ${commentText}`;
    commentsList.appendChild(newComment);
}

// Populate discussion forums and comments on page load
window.addEventListener('load', () => {
    populateDiscussionForums();
    populateComments();
});

// Add event listener for comment submission
document.getElementById('comment-form').addEventListener('submit', handleCommentSubmission);
