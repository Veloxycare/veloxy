import { a as u, A as d } from "./server.CoGzddUV.js";
/*! js-cookie v3.0.5 | MIT */ function g(e) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o];
    for (var n in s) e[n] = s[n];
  }
  return e;
}
var h = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function v(e, o) {
  function s(t, p, r) {
    if (!(typeof document > "u")) {
      (r = g({}, o, r)),
        typeof r.expires == "number" &&
          (r.expires = new Date(Date.now() + r.expires * 864e5)),
        r.expires && (r.expires = r.expires.toUTCString()),
        (t = encodeURIComponent(t)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var i = "";
      for (var c in r)
        r[c] &&
          ((i += "; " + c), r[c] !== !0 && (i += "=" + r[c].split(";")[0]));
      return (document.cookie = t + "=" + e.write(p, t) + i);
    }
  }
  function n(t) {
    if (!(typeof document > "u" || (arguments.length && !t))) {
      for (
        var p = document.cookie ? document.cookie.split("; ") : [],
          r = {},
          i = 0;
        i < p.length;
        i++
      ) {
        var c = p[i].split("="),
          l = c.slice(1).join("=");
        try {
          var f = decodeURIComponent(c[0]);
          if (((r[f] = e.read(l, f)), t === f)) break;
        } catch {}
      }
      return t ? r[t] : r;
    }
  }
  return Object.create(
    {
      set: s,
      get: n,
      remove: function (t, p) {
        s(t, "", g({}, p, { expires: -1 }));
      },
      withAttributes: function (t) {
        return v(this.converter, g({}, this.attributes, t));
      },
      withConverter: function (t) {
        return v(g({}, this.converter, t), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(o) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var a = v(h, { path: "/" });
const k = async (e, o, s) => {
    const n = await u.post(
      e === "patient"
        ? `${d}/api/v1/auth/login/patient/password`
        : `${d}/api/v1/auth/login/driver/password`,
      { email: o, password: s }
    );
    return (
      console.log("responseresponse", n),
      a.set("userType", n.data.data.user.role),
      a.set("id", n.data.data.user.id),
      a.set("token", n.data.data.token),
      n
    );
  },
  w = async (e) => {
    const {
      userType: o,
      name: s,
      email: n,
      password: t,
      country_code: p,
      phone_number: r,
      region: i,
      gender: c,
    } = e;
    return (
      console.log("formdata", e),
      await u.post(
        o === "patient"
          ? `${d}/api/v1/auth/register/patient`
          : `${d}/api/v1/auth/register/driver`,
        {
          name: s,
          email: n,
          password: t,
          country_code: p,
          phone_number: r,
          region: i,
          gender: c,
        }
      )
    );
  },
  C = async (e, o, s) =>
    (
      await u.post(`${d}/api/v1/auth/resend/otp/register`, {
        country_code: e,
        phone_number: o,
      })
    ).data,
  T = async (e, o, s, n) => {
    const t = await u.post(`${d}/api/v1/auth/verify/otp/register`, {
      country_code: e,
      phone_number: o,
      otp: s,
    });
    return (
      console.log("verifyOtpResponse", t),
      a.set("userType", t.data.data.userType),
      a.set("id", t.data.data.id),
      a.set("token", t.data.data.token),
      t.data
    );
  },
  x = async () => {
    try {
      const e = a.get("userType"),
        o = a.get("id"),
        s = a.get("token");
      return (
        console.log("Cookies.get", a.get("token")),
        (
          await u.get(`${d}/api/v1/auth/me`, {
            headers: { Authorization: `Bearer ${s}` },
          })
        ).data.data.user
      );
    } catch (e) {
      throw (console.error("Error fetching user data:", e), e);
    }
  },
  U = () => {
    a.remove("token"), a.remove("id"), a.remove("userType");
  },
  R = () => a.get("token");
export { x as a, U as b, R as g, k as l, w as r, C as s, T as v };
