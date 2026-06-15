(function () {
  window.FREESEWAA_API_ORIGIN = window.FREESEWAA_API_ORIGIN || window.location.origin;
  window.FREESEWAA_API_BASE_URL = window.FREESEWAA_API_BASE_URL || window.FREESEWAA_API_ORIGIN;

  const LANGUAGE_KEY = 'freesewaa-language';
  const LANGUAGE_META = {
    en: { code: 'EN', label: 'English', flag: '🇺🇸', htmlLang: 'en' },
    ko: { code: 'KO', label: '한국어 (Korean)', flag: '🇰🇷', htmlLang: 'ko' },
    ne: { code: 'NE', label: 'नेपाली (Nepali)', flag: '🇳🇵', htmlLang: 'ne' },
    hi: { code: 'HI', label: 'हिन्दी (Hindi)', flag: '🇮🇳', htmlLang: 'hi' },
    vi: { code: 'VI', label: 'Tiếng Việt', flag: '🇻🇳', htmlLang: 'vi' },
    fil: { code: 'FIL', label: 'Filipino', flag: '🇵🇭', htmlLang: 'fil' }
  };

  const TEXT = {
    en: {
      'Home': 'Home', 'About Us': 'About Us', 'Donate': 'Donate', 'Browse': 'Browse', 'Events': 'Events', 'Donate Us': 'Donate Us',
      'Notifications': 'Notifications', 'Messages': 'Messages', 'Settings': 'Settings', 'My Posts': 'My Posts', 'Track Your Request': 'Track Your Request', 'Free Services': 'Free Services', 'Personal Information': 'Personal Information', 'Edit Profile': 'Edit Profile', 'Change Region': 'Change Region', 'Saved Items': 'Saved Items', 'My Requests': 'My Requests', 'Toggle Dark Mode': 'Toggle Dark Mode', 'Logout': 'Logout',
      'Donate an Item': 'Donate an Item', 'Browse Free Items': 'Browse Free Items', 'Donate Items': 'Donate Items', 'View Events': 'View Events',
      'COMMUNITY GIVING HUB': 'COMMUNITY GIVING HUB', 'Give what you can.Find what you need.': 'Give what you can.<br>Find what you need.', 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.': 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.',
      'DONATE': 'DONATE', 'Share useful items with confidence': 'Share useful items with confidence', 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.': 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.',
      'BROWSE': 'BROWSE', 'Find free support nearby': 'Find free support nearby', 'Search available items, save what matters, and request support respectfully.': 'Search available items, save what matters, and request support respectfully.',
      'EVENTS': 'EVENTS', 'Join community support days': 'Join community support days', 'Volunteer for donation camps, suggest free events, and support outreach work.': 'Volunteer for donation camps, suggest free events, and support outreach work.',
      'Items Shared': 'Items Shared', 'Families Supported': 'Families Supported', 'Communities Reached': 'Communities Reached', 'COMMUNITY HUB': 'COMMUNITY HUB', 'A practical place for giving, receiving, and volunteering.': 'A practical place for giving, receiving, and volunteering.', 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.': 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.'
    },
    ko: {
      'Home': '홈', 'About Us': '소개', 'Donate': '기부', 'Browse': '찾기', 'Events': '행사', 'Donate Us': '후원',
      'Notifications': '알림', 'Messages': '메시지', 'Settings': '설정', 'My Posts': '내 게시물', 'Track Your Request': '요청 확인', 'Free Services': '무료 서비스', 'Personal Information': '개인 정보', 'Edit Profile': '프로필 수정', 'Change Region': '지역 변경', 'Saved Items': '저장한 항목', 'My Requests': '내 요청', 'Toggle Dark Mode': '다크 모드 전환', 'Logout': '로그아웃',
      'Donate an Item': '물품 기부하기', 'Browse Free Items': '무료 물품 보기', 'Donate Items': '물품 기부', 'View Events': '행사 보기',
      'COMMUNITY GIVING HUB': '커뮤니티 나눔 허브', 'Give what you can.Find what you need.': '나눌 수 있는 것을 나누고,<br>필요한 것을 찾으세요.', 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.': 'Free Sewaa는 무료 물품 기부, 커뮤니티 행사, 메시지, 안전한 픽업 조정을 통해 이웃을 연결합니다.',
      'DONATE': '기부', 'Share useful items with confidence': '안심하고 유용한 물품을 나누세요', 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.': '옷, 책, 식품 지원, 가구, 학용품을 명확한 픽업 정보와 함께 올리세요.',
      'BROWSE': '찾기', 'Find free support nearby': '가까운 무료 지원 찾기', 'Search available items, save what matters, and request support respectfully.': '사용 가능한 물품을 검색하고 저장하며 정중하게 요청하세요.',
      'EVENTS': '행사', 'Join community support days': '커뮤니티 지원의 날에 참여하세요', 'Volunteer for donation camps, suggest free events, and support outreach work.': '기부 캠프에 자원봉사하고 무료 행사를 제안하며 봉사 활동을 도우세요.',
      'Items Shared': '나눔 물품', 'Families Supported': '지원받은 가족', 'Communities Reached': '도달한 커뮤니티', 'COMMUNITY HUB': '커뮤니티 허브', 'A practical place for giving, receiving, and volunteering.': '나눔, 받기, 봉사를 위한 실용적인 공간입니다.', 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.': '물품 기부부터 픽업 메시지와 무료 행사까지, 홈에서 주요 Free Sewaa 활동을 쉽게 이용할 수 있습니다.'
    },
    ne: {
      'Home': 'गृह', 'About Us': 'हाम्रो बारेमा', 'Donate': 'दान', 'Browse': 'खोज्नुहोस्', 'Events': 'कार्यक्रम', 'Donate Us': 'हामीलाई सहयोग',
      'Notifications': 'सूचना', 'Messages': 'सन्देश', 'Settings': 'सेटिङ', 'My Posts': 'मेरा पोस्ट', 'Track Your Request': 'अनुरोध हेर्नुहोस्', 'Free Services': 'निःशुल्क सेवा', 'Personal Information': 'व्यक्तिगत जानकारी', 'Edit Profile': 'प्रोफाइल सम्पादन', 'Change Region': 'क्षेत्र बदल्नुहोस्', 'Saved Items': 'सुरक्षित सामान', 'My Requests': 'मेरा अनुरोध', 'Toggle Dark Mode': 'डार्क मोड बदल्नुहोस्', 'Logout': 'लगआउट',
      'Donate an Item': 'सामान दान गर्नुहोस्', 'Browse Free Items': 'निःशुल्क सामान हेर्नुहोस्', 'Donate Items': 'सामान दान', 'View Events': 'कार्यक्रम हेर्नुहोस्',
      'COMMUNITY GIVING HUB': 'समुदाय सहयोग केन्द्र', 'Give what you can.Find what you need.': 'जे सक्नुहुन्छ दिनुहोस्।<br>जे चाहिन्छ भेट्नुहोस्।', 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.': 'Free Sewaa ले निःशुल्क सामान दान, समुदाय कार्यक्रम, सन्देश र भरपर्दो पिकअप समन्वयमार्फत छिमेकीहरूलाई जोड्छ।',
      'DONATE': 'दान', 'Share useful items with confidence': 'आत्मविश्वासका साथ उपयोगी सामान बाँड्नुहोस्', 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.': 'लुगा, किताब, खाद्य सहयोग, फर्निचर वा अध्ययन सामग्री स्पष्ट पिकअप विवरणसहित पोस्ट गर्नुहोस्।',
      'BROWSE': 'खोज', 'Find free support nearby': 'नजिकै निःशुल्क सहयोग भेट्नुहोस्', 'Search available items, save what matters, and request support respectfully.': 'उपलब्ध सामान खोज्नुहोस्, महत्त्वपूर्ण कुरा सुरक्षित गर्नुहोस् र सम्मानपूर्वक अनुरोध गर्नुहोस्।',
      'EVENTS': 'कार्यक्रम', 'Join community support days': 'समुदाय सहयोग दिनमा सहभागी हुनुहोस्', 'Volunteer for donation camps, suggest free events, and support outreach work.': 'दान शिविरमा स्वयंसेवा गर्नुहोस्, निःशुल्क कार्यक्रम सुझाव दिनुहोस् र सहयोग कार्यमा साथ दिनुहोस्।',
      'Items Shared': 'बाँडिएका सामान', 'Families Supported': 'सहयोग पाएका परिवार', 'Communities Reached': 'पुगेका समुदाय', 'COMMUNITY HUB': 'समुदाय केन्द्र', 'A practical place for giving, receiving, and volunteering.': 'दिन, लिन र स्वयंसेवा गर्न व्यावहारिक ठाउँ।', 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.': 'सामान दानदेखि पिकअप सन्देश र निःशुल्क कार्यक्रमसम्म, मुख्य Free Sewaa कामहरू गृहपृष्ठबाट सजिलै गर्न सकिन्छ।'
    },
    hi: {
      'Home': 'होम', 'About Us': 'हमारे बारे में', 'Donate': 'दान करें', 'Browse': 'ब्राउज़', 'Events': 'कार्यक्रम', 'Donate Us': 'हमें सहयोग दें',
      'Notifications': 'सूचनाएं', 'Messages': 'संदेश', 'Settings': 'सेटिंग्स', 'My Posts': 'मेरी पोस्ट', 'Track Your Request': 'अनुरोध ट्रैक करें', 'Free Services': 'निःशुल्क सेवाएं', 'Personal Information': 'व्यक्तिगत जानकारी', 'Edit Profile': 'प्रोफाइल संपादित करें', 'Change Region': 'क्षेत्र बदलें', 'Saved Items': 'सेव किए गए आइटम', 'My Requests': 'मेरे अनुरोध', 'Toggle Dark Mode': 'डार्क मोड बदलें', 'Logout': 'लॉगआउट',
      'Donate an Item': 'सामान दान करें', 'Browse Free Items': 'मुफ्त सामान देखें', 'Donate Items': 'सामान दान करें', 'View Events': 'कार्यक्रम देखें',
      'COMMUNITY GIVING HUB': 'समुदाय सहायता केंद्र', 'Give what you can.Find what you need.': 'जो दे सकते हैं दें।<br>जो चाहिए उसे खोजें।', 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.': 'Free Sewaa मुफ्त सामान दान, समुदाय कार्यक्रम, संदेश और भरोसेमंद पिकअप समन्वय से पड़ोसियों को जोड़ता है।',
      'DONATE': 'दान', 'Share useful items with confidence': 'उपयोगी सामान भरोसे से साझा करें', 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.': 'कपड़े, किताबें, खाद्य सहायता, फर्नीचर या स्कूल सामग्री साफ पिकअप जानकारी के साथ पोस्ट करें।',
      'BROWSE': 'ब्राउज़', 'Find free support nearby': 'पास में मुफ्त सहायता खोजें', 'Search available items, save what matters, and request support respectfully.': 'उपलब्ध सामान खोजें, जरूरी चीजें सेव करें और सम्मान से अनुरोध करें।',
      'EVENTS': 'कार्यक्रम', 'Join community support days': 'समुदाय सहायता दिवसों में जुड़ें', 'Volunteer for donation camps, suggest free events, and support outreach work.': 'दान शिविरों में स्वयंसेवा करें, मुफ्त कार्यक्रम सुझाएं और आउटरीच में मदद करें।',
      'Items Shared': 'साझा सामान', 'Families Supported': 'सहायता पाए परिवार', 'Communities Reached': 'पहुंचे समुदाय', 'COMMUNITY HUB': 'समुदाय केंद्र', 'A practical place for giving, receiving, and volunteering.': 'देने, पाने और स्वयंसेवा के लिए व्यावहारिक जगह।', 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.': 'सामान दान से लेकर पिकअप संदेश और मुफ्त कार्यक्रम तक, होम पेज Free Sewaa के मुख्य काम आसान बनाता है।'
    },
    vi: {
      'Home': 'Trang chủ', 'About Us': 'Giới thiệu', 'Donate': 'Quyên góp', 'Browse': 'Tìm kiếm', 'Events': 'Sự kiện', 'Donate Us': 'Ủng hộ',
      'Notifications': 'Thông báo', 'Messages': 'Tin nhắn', 'Settings': 'Cài đặt', 'My Posts': 'Bài đăng của tôi', 'Track Your Request': 'Theo dõi yêu cầu', 'Free Services': 'Dịch vụ miễn phí', 'Personal Information': 'Thông tin cá nhân', 'Edit Profile': 'Sửa hồ sơ', 'Change Region': 'Đổi khu vực', 'Saved Items': 'Mục đã lưu', 'My Requests': 'Yêu cầu của tôi', 'Toggle Dark Mode': 'Đổi chế độ tối', 'Logout': 'Đăng xuất',
      'Donate an Item': 'Quyên góp đồ', 'Browse Free Items': 'Xem đồ miễn phí', 'Donate Items': 'Quyên góp đồ', 'View Events': 'Xem sự kiện',
      'COMMUNITY GIVING HUB': 'TRUNG TÂM CHIA SẺ CỘNG ĐỒNG', 'Give what you can.Find what you need.': 'Cho những gì bạn có.<br>Tìm những gì bạn cần.', 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.': 'Free Sewaa kết nối hàng xóm qua quyên góp đồ miễn phí, sự kiện cộng đồng, tin nhắn và phối hợp nhận đồ đáng tin cậy.',
      'DONATE': 'QUYÊN GÓP', 'Share useful items with confidence': 'Chia sẻ đồ hữu ích một cách tự tin', 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.': 'Đăng quần áo, sách, thực phẩm, nội thất hoặc đồ dùng học tập với thông tin nhận đồ rõ ràng.',
      'BROWSE': 'TÌM KIẾM', 'Find free support nearby': 'Tìm hỗ trợ miễn phí gần bạn', 'Search available items, save what matters, and request support respectfully.': 'Tìm đồ có sẵn, lưu thứ quan trọng và gửi yêu cầu lịch sự.',
      'EVENTS': 'SỰ KIỆN', 'Join community support days': 'Tham gia ngày hỗ trợ cộng đồng', 'Volunteer for donation camps, suggest free events, and support outreach work.': 'Tình nguyện cho các đợt quyên góp, đề xuất sự kiện miễn phí và hỗ trợ hoạt động cộng đồng.',
      'Items Shared': 'Đồ đã chia sẻ', 'Families Supported': 'Gia đình được hỗ trợ', 'Communities Reached': 'Cộng đồng tiếp cận', 'COMMUNITY HUB': 'TRUNG TÂM CỘNG ĐỒNG', 'A practical place for giving, receiving, and volunteering.': 'Nơi thiết thực để cho, nhận và tình nguyện.', 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.': 'Từ quyên góp đồ đến tin nhắn nhận đồ và sự kiện miễn phí, trang chủ giúp bạn dễ dùng các chức năng chính của Free Sewaa.'
    },
    fil: {
      'Home': 'Home', 'About Us': 'Tungkol Sa Amin', 'Donate': 'Mag-donate', 'Browse': 'Maghanap', 'Events': 'Events', 'Donate Us': 'Suportahan Kami',
      'Notifications': 'Notifications', 'Messages': 'Messages', 'Settings': 'Settings', 'My Posts': 'Aking Posts', 'Track Your Request': 'I-track ang Request', 'Free Services': 'Free Services', 'Personal Information': 'Personal na Impormasyon', 'Edit Profile': 'I-edit ang Profile', 'Change Region': 'Palitan ang Rehiyon', 'Saved Items': 'Saved Items', 'My Requests': 'Aking Requests', 'Toggle Dark Mode': 'Palitan ang Dark Mode', 'Logout': 'Logout',
      'Donate an Item': 'Mag-donate ng Item', 'Browse Free Items': 'Tingnan ang Libreng Items', 'Donate Items': 'Mag-donate ng Items', 'View Events': 'Tingnan ang Events',
      'COMMUNITY GIVING HUB': 'COMMUNITY GIVING HUB', 'Give what you can.Find what you need.': 'Ibigay ang kaya mo.<br>Hanapin ang kailangan mo.', 'Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.': 'Pinag-uugnay ng Free Sewaa ang mga kapitbahay sa libreng donasyon, community events, messages, at maayos na pickup coordination.',
      'DONATE': 'DONATE', 'Share useful items with confidence': 'Magbahagi ng kapaki-pakinabang na bagay nang may tiwala', 'Post clothing, books, food support, furniture, or school supplies with clear pickup details.': 'Mag-post ng damit, libro, food support, furniture, o school supplies na may malinaw na pickup details.',
      'BROWSE': 'BROWSE', 'Find free support nearby': 'Humanap ng libreng suporta malapit sa iyo', 'Search available items, save what matters, and request support respectfully.': 'Maghanap ng available items, i-save ang mahalaga, at mag-request nang may respeto.',
      'EVENTS': 'EVENTS', 'Join community support days': 'Sumali sa community support days', 'Volunteer for donation camps, suggest free events, and support outreach work.': 'Mag-volunteer sa donation camps, magmungkahi ng free events, at suportahan ang outreach work.',
      'Items Shared': 'Items na Naibahagi', 'Families Supported': 'Pamilyang Natulungan', 'Communities Reached': 'Komunidad na Naabot', 'COMMUNITY HUB': 'COMMUNITY HUB', 'A practical place for giving, receiving, and volunteering.': 'Praktikal na lugar para magbigay, tumanggap, at mag-volunteer.', 'From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.': 'Mula item donations hanggang pickup messages at free events, madaling maabot sa home page ang pangunahing Free Sewaa actions.'
    }
  };

  function onReady(callback) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback);
    else callback();
  }

  function injectLanguageStyle() {
    if (document.getElementById('freesewaa-language-style')) return;
    const style = document.createElement('style');
    style.id = 'freesewaa-language-style';
    style.textContent = `
      .language-selector{position:relative;z-index:70}.language-selector summary{width:82px;height:44px;display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid rgba(255,236,212,.1);border-radius:14px;color:var(--muted);background:transparent;cursor:pointer;list-style:none;transition:color .3s ease,background .3s ease,border-color .3s ease,box-shadow .3s ease}.language-selector summary::-webkit-details-marker{display:none}.language-selector summary:focus-visible{outline:2px solid var(--bronze);outline-offset:2px}.language-selector[open] summary,.language-selector summary:hover{color:var(--cream-2);border-color:rgba(255,236,212,.18);background:rgba(255,244,230,.05);box-shadow:0 10px 30px rgba(0,0,0,.16)}.language-selector__icon{width:16px;height:16px;flex:0 0 auto}.language-selector__code{font-size:.82rem;font-weight:800;letter-spacing:.02em;color:currentColor}.language-selector__chevron{width:7px;height:7px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg) translateY(-2px);opacity:.78}.language-selector[open] .language-selector__chevron{transform:rotate(225deg) translate(-1px,-1px)}.language-selector__menu{position:absolute;right:0;top:calc(100% + 10px);min-width:210px;padding:10px;border:1px solid rgba(255,236,212,.12);border-radius:14px;background:color-mix(in srgb,var(--bg-2) 94%,transparent);backdrop-filter:blur(18px) saturate(145%);box-shadow:var(--shadow)}.language-selector__menu:before{content:"";position:absolute;top:-6px;right:27px;width:10px;height:10px;border-left:1px solid rgba(255,236,212,.12);border-top:1px solid rgba(255,236,212,.12);background:color-mix(in srgb,var(--bg-2) 94%,transparent);transform:rotate(45deg)}.language-selector__option{width:100%;display:flex;align-items:center;gap:10px;min-height:38px;padding:8px 10px;border:0;border-radius:10px;color:var(--muted);background:transparent;text-align:left;font:inherit;font-size:.9rem;font-weight:700;cursor:pointer}.language-selector__option+.language-selector__option{border-top:1px solid rgba(255,236,212,.07)}.language-selector__option:hover,.language-selector__option.is-active{color:var(--cream-2);background:rgba(255,244,230,.06)}.language-selector__check{width:16px;color:#35c7aa;font-weight:900;text-align:center;opacity:0}.language-selector__option.is-active .language-selector__check{opacity:1}.language-selector__flag{width:20px;text-align:center}body.light-mode .language-selector summary{color:var(--muted);border-color:rgba(42,32,23,.1)}body.light-mode .language-selector[open] summary,body.light-mode .language-selector summary:hover{color:var(--text);background:rgba(42,32,23,.06);border-color:rgba(42,32,23,.16)}body.light-mode .language-selector__menu{border-color:rgba(42,32,23,.12);background:color-mix(in srgb,var(--panel) 96%,transparent)}body.light-mode .language-selector__menu:before{border-color:rgba(42,32,23,.12);background:color-mix(in srgb,var(--panel) 96%,transparent)}body.light-mode .language-selector__option:hover,body.light-mode .language-selector__option.is-active{color:var(--text);background:rgba(42,32,23,.07)}@media(max-width:760px){.language-selector summary{width:82px}.language-selector__menu{right:auto;left:0}.language-selector__menu:before{right:auto;left:31px}}
    `;
    document.head.appendChild(style);
  }

  function languageSelectorHtml() {
    return `
      <details class="language-selector">
        <summary aria-label="Choose language">
          <svg class="language-selector__icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M3 12h18M12 3c2.3 2.5 3.4 5.5 3.4 9s-1.1 6.5-3.4 9M12 3c-2.3 2.5-3.4 5.5-3.4 9s1.1 6.5 3.4 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
          <span class="language-selector__code">EN</span><span class="language-selector__chevron" aria-hidden="true"></span>
        </summary>
        <div class="language-selector__menu" role="menu">
          ${Object.entries(LANGUAGE_META).map(([lang, meta]) => `<button class="language-selector__option" type="button" data-lang="${lang}" data-code="${meta.code}" role="menuitem"><span class="language-selector__check">✓</span><span class="language-selector__flag">${meta.flag}</span><span>${meta.label}</span></button>`).join('')}
        </div>
      </details>`;
  }

  function ensureLanguageSelectors() {
    document.querySelectorAll('.header-actions').forEach(actions => {
      if (actions.querySelector('.language-selector')) return;
      const wrapper = document.createElement('div');
      wrapper.innerHTML = languageSelectorHtml().trim();
      const selector = wrapper.firstElementChild;
      const settings = actions.querySelector('.settings-dropdown');
      actions.insertBefore(selector, settings || null);
    });
  }

  function keyForElement(element) {
    if (element.closest('.language-selector')) return '';
    if (element.dataset.i18nKey) return element.dataset.i18nKey;
    const key = element.textContent.replace(/\s+/g, ' ').trim();
    if (key) element.dataset.i18nKey = key;
    return key;
  }

  function translateKnownText(lang) {
    const dictionary = TEXT[lang] || TEXT.en;
    document.querySelectorAll('a,button,span,p,h1,h2,h3,strong,.mini-label,.eyebrow,.stat-label').forEach(element => {
      if (element.children.length && !element.matches('.hero-title')) return;
      const key = keyForElement(element);
      if (!key || !dictionary[key]) return;
      if (element.matches('.hero-title')) element.innerHTML = dictionary[key];
      else element.textContent = dictionary[key];
    });
    document.documentElement.lang = LANGUAGE_META[lang]?.htmlLang || 'en';
  }

  function applyLanguage(lang) {
    const normalized = LANGUAGE_META[lang] ? lang : 'en';
    const meta = LANGUAGE_META[normalized];
    document.querySelectorAll('.language-selector').forEach(selector => {
      const code = selector.querySelector('.language-selector__code');
      if (code) code.textContent = meta.code;
      selector.querySelectorAll('.language-selector__option').forEach(option => {
        option.classList.toggle('is-active', option.dataset.lang === normalized);
      });
    });
    translateKnownText(normalized);
  }

  function bindLanguageSelectors() {
    document.querySelectorAll('.language-selector').forEach(selector => {
      if (selector.dataset.languageBound === 'true') return;
      selector.dataset.languageBound = 'true';
      selector.querySelectorAll('.language-selector__option').forEach(option => {
        option.addEventListener('click', () => {
          const lang = option.dataset.lang || 'en';
          localStorage.setItem(LANGUAGE_KEY, lang);
          applyLanguage(lang);
          selector.removeAttribute('open');
        });
      });
    });
  }

  onReady(() => {
    injectLanguageStyle();
    ensureLanguageSelectors();
    bindLanguageSelectors();
    applyLanguage(localStorage.getItem(LANGUAGE_KEY) || 'en');
  });
})();
