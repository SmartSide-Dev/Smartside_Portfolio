// Object containing project details (this could be fetched from an API or database)
const projects = {
    'project1': {
        backgroundImage: "img/project/GK.png",
        title: 'GK Wedding & Event Management',
        client: 'Guna Sekaran',  // client/Client name
        date: 'Jan 03, 2020',  // Date
        status: 'Completed - Live',  // Project status
        liveUrl: "https://gkevents.netlify.app/",  // Go Live URL for project1
        content: `
            <p>Videos with a wow factor are always more shareable than those without it. The wow factor
            is hard to define, but it generally refers to any content that makes viewers think, “Wow!” 
            For example, consider those viral videos of athletes making insanely difficult basketball trick 
            shots, such as shooting a basket while doing a backwards flip on a trampoline.</p>
            <p>That’s the kind of catchy content that makes people want to share it with their friends.
            With a little clever marketing, you can put that wow factor to work for your business’ videos.</p>
        `,
        quote: {
            text: 'Create horizontal, square, and vertical videos that are ready to be exported to your Instagram video stories and posts. Perfect for any social network!',
            client: 'Max Desmarais'
        },
        description: `
            <p>An average Internet user watches about 1.5 hours of online video every day. This means 
            that video can be a powerful marketing tool for getting your message before the eyes of 
            millions of people. However, not all videos are created equal.</p>
            <p>Some of them are inherently more shareable on social media than others. Here’s a quick 
            look at how to make users want to share your videos on social media.</p>
        `,
        tags: ['Wedding', 'Event', 'Moments']  // Tags for the project
    },
    'project2': {
        backgroundImage: 'img/project/StartupCulture.png',  // Path to the background image
        title: 'Startup Culture',  // Project title
        client: 'Krista Starkes',  // client/Client name
        date: 'Jan 03, 2020',  // Date
        status: 'Completed - Live',  // Project status
        liveUrl: "https://startupculturefoundation.in/",  // Go Live URL for project1
        content: `
            <p>Videos with a wow factor are always more shareable than those without it. The wow factor
            is hard to define, but it generally refers to any content that makes viewers think, “Wow!” 
            For example, consider those viral videos of athletes making insanely difficult basketball trick 
            shots, such as shooting a basket while doing a backwards flip on a trampoline.</p>
            <p>That’s the kind of catchy content that makes people want to share it with their friends.
            With a little clever marketing, you can put that wow factor to work for your business’ videos.</p>
        `,
        quote: {
            text: 'Create horizontal, square, and vertical videos that are ready to be exported to your Instagram video stories and posts. Perfect for any social network!',
            client: 'Max Desmarais'
        },
        description: `
            <p>An average Internet user watches about 1.5 hours of online video every day. This means 
            that video can be a powerful marketing tool for getting your message before the eyes of 
            millions of people. However, not all videos are created equal.</p>
            <p>Some of them are inherently more shareable on social media than others. Here’s a quick 
            look at how to make users want to share your videos on social media.</p>
        `,
        tags: ['StartUP', 'Culture', 'Entreprenuership']  // Tags for the project
    },
    'project3': {
        backgroundImage: 'img/project/StartupCulture.png',  // Path to the background image
        title: 'Socio Potent',
        client: 'Krista Starkes',  // client/Client name
        date: 'Jan 03, 2020',  // Date
        status: 'Completed - Live',  // Project status
        liveUrl: "https://sociopotents.in/",  // Go Live URL for project1
        content: `
            <p>Videos with a wow factor are always more shareable than those without it. The wow factor
            is hard to define, but it generally refers to any content that makes viewers think, “Wow!” 
            For example, consider those viral videos of athletes making insanely difficult basketball trick 
            shots, such as shooting a basket while doing a backwards flip on a trampoline.</p>
            <p>That’s the kind of catchy content that makes people want to share it with their friends.
            With a little clever marketing, you can put that wow factor to work for your business’ videos.</p>
        `,
        quote: {
            text: 'Create horizontal, square, and vertical videos that are ready to be exported to your Instagram video stories and posts. Perfect for any social network!',
            client: 'Max Desmarais'
        },
        description: `
            <p>An average Internet user watches about 1.5 hours of online video every day. This means
            that video can be a powerful marketing tool for getting your message before the eyes of
            millions of people. However, not all videos are created equal.</p>
            <p>Some of them are inherently more shareable on social media than others. Here’s a quick
            look at how to make users want to share your videos on social media.</p>
        `,
        tags: ['Social', 'Potential', 'People']  // Tags for the project
    },
    'project4': {
        backgroundImage: 'img/project/GRCS.png',  // Path to the background image
        title: 'Geearr consumer solutions',
        client: 'Krista Starkes',  // client/Client name
        date: 'Jan 03, 2020',  // Date
        status: 'Completed - Live',  // Project status
        liveUrl: "https://grcsolutions.in/",  // Go Live URL for project1
        content: `
            <p>Videos with a wow factor are always more shareable than those without it. The wow factor
            is hard to define, but it generally refers to any content that makes viewers think, “Wow!”
            For example, consider those viral videos of athletes making insanely difficult basketball trick
            shots, such as shooting a basket while doing a backwards flip on a trampoline.</p>
            <p>That’s the kind of catchy content that makes people want to share it with their friends.
            With a little clever marketing, you can put that wow factor to work for your business’ videos.</p>
        `,
        quote: {
            text: 'Create horizontal, square, and vertical videos that are ready to be exported to your Instagram video stories and posts. Perfect for any social network!',
            client: 'Max Desmarais'
        },
        description: `
            <p>An average Internet user watches about 1.5 hours of online video every day. This means
            that video can be a powerful marketing tool for getting your message before the eyes of
            millions of people. However, not all videos are created equal.</p>
            <p>Some of them are inherently more shareable on social media than others. Here’s a quick
            look at how to make users want to share your videos on social media.</p>
        `,
        tags: ['E-Commerce', 'Solutions', 'Consumer']  // Tags for the project
    }
    // Add more projects here...
};
// Function to load the project details when the page is loaded
function loadProjectDetails() {
    // Get the projectId from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectId');  // e.g., 'project2'
    const heroSection = document.getElementById('projectHero');
    const tagsContainer = document.getElementById('projectTags');
    const goLiveButton = document.getElementById('goLiveButton');
    const goLiveProjects = ['project1', 'project2', 'project3', 'project4'];


    // Check if projectId exists in the URL
    // if (!projectId) {
    //     console.error('No project ID found in the URL');
    //     return;
    // }

    // Assuming 'projects' object contains your project data (ensure it is declared globally or imported properly)
    const project = projects[projectId];

    // Check if the project exists in the data
    if (project) {
        console.log('Project found:', project);

        // Check if screen width is for mobile view
        const isMobile = window.innerWidth <= 768;  // Define 768px as mobile breakpoint

        const heroSection = document.getElementById('projectHero');

        if (isMobile) {
            // For mobile view, set the common background image
            heroSection.style.backgroundImage = "url('img/hero/hero-8.jpg')";
        } else {
            // For desktop view, set the project-specific background image
            heroSection.style.backgroundImage = `url('${project.backgroundImage}')`;
        }

        if (goLiveProjects.includes(projectId)) {
            goLiveButton.href = project.liveUrl;  // Assuming each project has a 'liveUrl' property
            goLiveButton.style.display = 'inline-block';  // Show "Go Live" button
        } else {
            // Hide the "Go Live" button for other projects
            goLiveButton.style.display = 'none';
        }

        // Update other project details
        document.getElementById('projectHeroTitle').innerText = project.title;
        document.getElementById('projectHeroClient').innerText = project.client;
        document.getElementById('projectHeroDate').innerText = project.date;
        document.getElementById('projectHeroStatus').innerText = project.status;

        // Update project content
        document.getElementById('projectDetailsText').innerHTML = project.content;

        // Update project quote
        document.getElementById('projectQuoteText').innerText = project.quote.text;
        document.getElementById('projectQuoteClient').innerText = project.quote.client;

        // Update project description
        document.getElementById('projectDetailsDesc').innerHTML = project.description;

        // Update project tags
        tagsContainer.innerHTML = '<span><i class="fa fa-tag"></i> Tag:</span>';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('a');
            tagElement.href = '';
            tagElement.innerText = tag;
            tagsContainer.appendChild(tagElement);
        });
          
    }  else {
        // Display "Project Not Found" message
        heroSection.style.backgroundImage = "url('img/hero/hero-8.jpg')";  // Default background image

        document.getElementById('projectHeroTitle').innerText = '404 - Project Not Found';
        document.getElementById('projectHeroClient').innerText = '-';
        document.getElementById('projectHeroDate').innerText = 'No information available';
        document.getElementById('projectHeroStatus').innerHTML = '-';

        document.getElementById('projectDetailsText').innerHTML = '<p>We could not find the project you were looking for. Please check the project ID or return to the homepage.</p>';
        document.getElementById('projectQuoteText').innerText = "Sometimes the wrong choices bring us to the right places."; 
        document.getElementById('projectQuoteClient').innerText = "- Anonymous";
        projectDetailsDesc.innerHTML = '';
        tagsContainer.innerHTML = '<span><i class="fa fa-tag"></i> Tag:</span>';
        const tagElement = document.createElement('a');
        tagElement.href = '';
        tagElement.innerText = 'No Tags Available';
        tagsContainer.appendChild(tagElement);

        // Set a default "not found" background   
        goLiveButton.style.display = 'none';  // Hide "Go Live"
        document.getElementById('backButton').style.display = 'inline-block';



    }
}

// Function to handle button click
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html#projects';  // Navigate to index.html with #projects
});
// Call loadProjectDetails when the page loads
window.onload = loadProjectDetails;

// Optionally, if you want the background to update when resizing:
window.onresize = loadProjectDetails;


