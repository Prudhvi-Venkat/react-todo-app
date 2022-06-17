import Emoji from 'a11y-react-emoji';

export default function Footer() {
    return (
        <div className="p-4 bg-white rounded-lg shadow md:px-6 dark:bg-gray-800">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022 Made in
                {' '}
                <Emoji symbol="❤" label="love" />
                {' '}with <a href="https://reactjs.org/" className="hover:underline">React</a> & <a href="https://tailwindcss.com/" className="hover:underline">Tailwindcss</a>
                {' '}
            </span>
        </div>
    )
}