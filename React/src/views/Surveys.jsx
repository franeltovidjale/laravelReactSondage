
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import TButton from '../components/core/TButton'
import PageComponent from '../components/PageComponent'
import SurveyListItem from '../components/SurveyListItem'
import { UseStateContext } from '../contexts/ContextProvider'


// rfc pour racourci rapide
export default function Surveys() {
const {surveys} = UseStateContext()

/*console.log(surveys)*/

const onDeleteClick = (surveyId) => {

    console.log(`Deleting survey with ID: ${surveyId}`)
}

  return ( <PageComponent title= "Surveys"
   buttons = {
     <TButton color='green' to='/surveys/create'>
        <PlusCircleIcon className='h-6 w-6 mr-2' />
        Create New
     </TButton>
   }
   >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
           {surveys.map( survey => (
                <SurveyListItem survey={survey} key={survey.id}
                /* onClick={onDeleteClick} */
                 onClick={() => onDeleteClick(survey.id)}
                  />  
            ))}
      </div>
    </PageComponent>
) 
}
