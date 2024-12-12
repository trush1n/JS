function isIsogram(str) {
    let a_count = 0;
    let b_count = 0;
    let c_count = 0;
    let d_count = 0;
    let e_count = 0;
    let f_count = 0;
    let g_count = 0;
    let h_count = 0;
    let i_count = 0;
    let j_count = 0;
    let k_count = 0;
    let l_count = 0;
    let m_count = 0;
    let n_count = 0;
    let o_count = 0;
    let p_count = 0;
    let q_count = 0;
    let r_count = 0;
    let s_count = 0;
    let t_count = 0;
    let u_count = 0;
    let v_count = 0;
    let w_count = 0;
    let x_count = 0;
    let y_count = 0;
    let z_count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case ("a"):
          a_count++;
          break;
        case ("b"): b_count++;
          break;
        case ("c"): c_count++;
          break;
        case ("d"): d_count++;
          break;
        case ("e"): e_count++;
          break;
        case ("f"): f_count++;
          break;
        case ("g"): g_count++;
          break;
        case ("h"): h_count++;
          break;
        case ("i"): i_count++;
          break;
        case ("j"): j_count++;
          break;
        case ("k"): k_count++;
          break;
        case ("l"): l_count++;
          break;
        case ("m"): m_count++;
          break;
        case ("n"): n_count++;
          break;
        case ("o"): o_count++;
          break;
        case ("p"): p_count++;
          break;
        case ("q"): q_count++;
          break;
        case ("r"): r_count++;
          break;
        case ("s"): s_count++;
          break;
        case ("t"): t_count++;
          break;
        case ("u"): u_count++;
          break;
        case ("v"): v_count++;
          break;
        case ("w"): w_count++;
          break;
        case ("x"): x_count++;
          break;
        case ("y"): y_count++;
          break;
        case ("z"): z_count++;
          break;
      }
    }
    if (a_count >= 2 || b_count >= 2 || c_count >= 2 || d_count >= 2 || e_count >= 2 || f_count >= 2 || g_count >= 2 || h_count >= 2 || i_count >= 2 || j_count >= 2 || k_count >= 2 || l_count >= 2 || m_count >= 2 || n_count >= 2 || o_count >= 2 || p_count >= 2 || q_count >= 2 || r_count >= 2 || s_count >= 2 || t_count >= 2 || u_count >= 2 || v_count >= 2 || w_count >= 2 || x_count >= 2 || y_count >= 2 || z_count >= 2) {
      return false
    } else {
      return true
    }
  }





isIsogram("Dermatoglyphics")//, true );
isIsogram("isogram")//, true );
isIsogram("aba")//, false, "same chars may not be adjacent" );
isIsogram("moOse")//, false, "same chars may not be same case" );
isIsogram("isIsogram")//, false );
isIsogram("")//, true, "an empty string is a valid isogram" );
