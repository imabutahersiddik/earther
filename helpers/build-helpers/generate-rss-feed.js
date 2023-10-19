import { Feed } from 'feed'
const generateRSSFeed = (articles) => {
    const baseUrl = 'https://earther.vercel.app';
    const author = {
        name: 'Taher',
        email: 'imtaher313@gmail.com',
        link: 'https://twitter.com/kiamt',
    };

    // Construct a new Feed object
    const feed = new Feed({
        title: 'Articles by Taher',
        description:
            "Connect for reason.",
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
        },
        author,
    });

    // Add each article to the feed
    articles.forEach((post) => {
        const { content, slug, date, excerpt, title } = post;
        const url = `${baseUrl}/${slug}`;

        feed.addItem({
            title,
            id: url,
            link: url,
            excerpt,
            content,
            author: [author],
            date: new Date(date),
        });
    });

    return feed;

};
export default generateRSSFeed;