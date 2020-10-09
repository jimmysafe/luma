import { RichText } from 'prismic-reactjs'

const Text = ({ slice }) => {
    const { bg_color, text_content } = slice.primary

    const getBgClass = () => {
        switch(bg_color){
            case 'onda svg':
                return "min-h-wave bg-wave bg-cover bg-center"
            case 'bianco':
                return 'bg-white'
            case 'marroncino':
                return 'bg-primary'
            default:
                return 'bg-white'
        }
    }

    return (
        <div className={`${getBgClass()}`}>
            <div className="container mx-auto text-center py-10 px-4">
                <RichText render={text_content}/>
            </div>
        </div>
    )
}

export default Text
