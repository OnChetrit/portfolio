import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize } from './hooks/useWindowSize';

import { SVG } from './dynamic/SVG';
import { projects } from '../services/project.service';

export const ProjectList = () => {
  const size = useWindowSize();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="infinite-text-container" id="projects">
        <div className="infinite-text flex">
          <div>
            {' '}
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
          </div>
          <div>
            {' '}
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
          </div>
        </div>{' '}
        <div className="infinite-text flex">
          <div>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
          </div>
          <div>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>{' '}
          </div>
        </div>
      </section>
      <div className="project-list">
        {projects.map(
          ({
            title,
            folder,
            genre,
            desc,
            madeWith,
            urlLive,
            urlGithub,
            thumbnails,
          }) => {
            return (
              <section
                id={title}
                key={title}
                className="project flex main-container"
              >
                <div className="project-info flex column">
                  <h5>{genre}</h5>
                  <h2>{title}</h2>
                  <div className="desc">
                    {desc.map((p) => {
                      return <p key={p}>{p}</p>;
                    })}
                  </div>
                  <div className="project-actions flex space-between">
                    <Link
                      to={{ pathname: urlLive }}
                      className="action"
                      target="_blank"
                    >
                      View Site
                    </Link>
                    <Link
                      to={{ pathname: urlGithub }}
                      className="action"
                      target="_blank"
                    >
                      Repo
                    </Link>
                  </div>
                  <div className="skills-used flex">
                    {madeWith.map((skill) => {
                      return (
                        <Tilt perspective={500} key={skill} scale={1.15}>
                          <SVG skill={skill} />
                        </Tilt>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="slider"
                  style={{
                    width: size.width > 960 ? size.width / 2 - 50 : '100%',
                  }}
                >
                  <Slider {...settings}>
                    {thumbnails.map((thumbnail) => {
                      return (
                        <div className="thumbnail" key={thumbnail}>
                          <img
                            src={
                              require(`../../assets/img/thumbnails/${folder}/${thumbnail}.png`)
                                .default
                            }
                            alt=""
                          />
                          <div className="count">
                            <span>
                              {thumbnail}/{thumbnails.length}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </section>
            );
          }
        )}
      </div>
    </>
  );
};
