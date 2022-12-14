import React from "react";
import { PageItem, Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Page = (p, keyword) => {
  console.log(p);
  return (
    p.pages > 1 && (
      <Pagination>
        {[...Array(p.pages).keys()].map((e) => (
          <LinkContainer
            key={e + 1}
            to={
              !p.isAdmin
                ? p.keyword
                  ? `/search/${p.keyword}/page/${e + 1}`
                  : `/page/${e + 1}`
                : `/admin/productlist/${e + 1}`
            }
          >
            <PageItem active={e + 1 === p.page}>{e + 1}</PageItem>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Page;
