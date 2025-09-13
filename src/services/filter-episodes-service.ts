import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise <PodcastTransferModel> => {

    let responseFormat : PodcastTransferModel = {
        StatusCode: 0,
        body: [],
    };

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat.StatusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

    responseFormat.body = data;

    return responseFormat;
}