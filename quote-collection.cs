using System.Collections.Generic;
using web.Models;

namespace web
{
  public static class QuoteCollection
  {
    public static List<Quote> quotes = new List<Quote>()
    {
      new Quote() { Id = 0, Header = "ah", Body = "ab", Footer = "af"},
      new Quote() { Id = 1, Header = "bh", Body = "bb", Footer = "bf"},
      new Quote() { Id = 2, Header = "ch", Body = "cb", Footer = "cf"},
      new Quote() { Id = 3, Header = "dh", Body = "db", Footer = "df"},
      new Quote() { Id = 4, Header = "eh", Body = "eb", Footer = "ef"}
    };
  }
}
