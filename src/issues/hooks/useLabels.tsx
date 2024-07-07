import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
    const { data } = await githubApi.get<Label[]>('/labels');
    return data;
}

export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
            placeholderData: [
                {
                    id:139734344,
                    node_id:"MDU6TGFiZWwxMzk3MzQzNDQ=",
                    url:"https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Utils",
                    name:"Component: Test Utils",
                    color:"eb6420",
                    default:false,
                }
            ]
        }
    );

    return labelsQuery;
}