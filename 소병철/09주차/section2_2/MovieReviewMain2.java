package section2_2;

public class MovieReviewMain2 {
    static void main(String[] args) {
        MovieReview[] reviews = new MovieReview[2];

        MovieReview inception = new MovieReview();
        inception.title = "인셉션";
        inception.review = "재미가 있었다";

        MovieReview aboutTime = new MovieReview();
        aboutTime.title = "어바웃 타임";
        aboutTime.review = "재미가 아주 있었다";

        reviews[0] = inception;
        reviews[1] = aboutTime;

        for (MovieReview review : reviews) {
            System.out.printf("영화 제목: %s, 리뷰: %s%n", review.title, review.review);
        }
    }
}
