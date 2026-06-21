import { Publication } from "@/data/resume";

interface Props {
  publications: Publication[];
}

const ResearchSection = ({ publications }: Props) => {
  return (
    <section className="mb_48">
      <h2 className="h2_heading font-serif dark:text-gray-100">
        Research & Publications
      </h2>
      {publications.map((pub) => (
        <div className="card" key={pub.doi}>
          <div className="card_left">
            <h3 className="card_left_heading">
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer ugc"
                className="link dark:text-blue-400"
              >
                {pub.venue.split("(")[0]}
                <br/>
                {'('}{pub.venue.split("(")[1]}
              </a>
            </h3>
            <div className="timeperiod dark:text-gray-400">
              <span>{pub.date}</span>
            </div>
            <div className="techstack dark:text-gray-400">
              {pub.tags.join(", ")}
            </div>
          </div>
          <div className="card_right">
            <div className="card_right_heading dark:text-gray-200">
              <strong>
                {pub.title}{" "}
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer ugc"
                  className="link underline dark:text-blue-400"
                >
                  ({pub.doi})
                </a>
              </strong>
            </div>
            <div>
              <ul className="p-0">
                {pub.bullets.map((bullet, i) => (
                  <li key={i} className="card_right_list dark:text-gray-300">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResearchSection;
