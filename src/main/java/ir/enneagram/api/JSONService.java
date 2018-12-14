package ir.enneagram.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ir.enneagram.Track;

import java.util.ArrayList;
import java.util.List;

@Path("/json/metallica")
public class JSONService {

    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public Track getTrackInJSON() {

        Track track = new Track();
        track.setTitle("Enter Sandman");
        track.setSinger("Metallica");

        return track;

    }

    @GET
    @Path("/get2")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Track> getTrackInJSONs() {

        Track track = new Track();
        track.setTitle("Enter Sandman");
        track.setSinger("Metallica");
        Track track2 = new Track();
        track2.setTitle("dhsfuyhdsughsu");
        track2.setSinger("dgujdghifihkifjkigkjigokjgi");

        List<Track> tracks = new ArrayList<>();
        tracks.add(track);
        tracks.add(track2);

        return tracks;

    }

    @POST
    @Path("/post")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createTrackInJSON(Track track) {

        String result = "Track saved : " + track;
        return Response.status(201).entity(result).build();

    }

}
