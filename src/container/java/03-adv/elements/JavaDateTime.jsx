import React from 'react'

function JavaDateTime() {
  return (
    <div>
      <h1>java.time package</h1>
  <h2>java.time, java.time.chrono, java.time.temporal, java.time.zone</h2>
<section>
  <h2>LocalDateTime</h2>
  <pre>LocalDate.of(2022, 12,3); LocalTime(22, 10,20);<br/>
  LocalDate.ofYearDay(2000, 333); LocalTime.ofSecondOfDay(86400);<br/>
  LocalDate.parse("2022-12-3"); LocalTime.parse("22:30:00");<br/>
  LocalDate date = localDateTime.toLocalDate();<br/>
  LocalTime time = localDateTime.toLocalTime();</pre>
</section>
<section>
  <h2>필드값 가져오기</h2>
  <h4>LocalDate</h4>
  <pre>int getYear(); int getMonthValue(); Month getMonth(); int getDayOfYear();<br/>
  int minute = now.getMinute() OR now.get(ChronoField.MINUTE_OF_HOUR);<br/>
  DayOfWeek getDayOfWeek(); int lengthOfMonth(); <br/>
  int lengthOfYear(); boolean isLeapYear();</pre>
  <h4>LocalTime</h4>
  <pre>int getHour(); int getMinute(); int getSecond(); int getNano();<br/>
  int get(TemporalField field); long getLong(TemporalField field);<br/>
  dateTime.get(ChronoField.ERA);<br/>
  YEAR, MONTH_OF_YEAR, HOUR_OF_DAY, MILLI_OF-DAY, MINUTE_OF_DAY, ... 많음 </pre>
</section>
  <section>
    <h2>with(), plus(), minus()</h2>
    <pre>LocalDate with(TemporalField field, long newValue);<br/>
    LocalTime plus(TemporalAmount amountToAdd);<br/>
    LocalTime plus(long amountToAdd, TemporalUnit unit);<br/>
    LocalDate plus(TemporalAmount amountToAdd);<br/>
    LocalDate plus(long amountToAdd, TemporalUnit unit);<br/>
    LocalDate tomorrow = today.plusDays(1, ChronoUnit.DAYS);<br/>
    LocalDate tomorrow = today.plusDays(1);</pre>
  </section>
  <section>
    <h5>date1.isAfter(date); isBefore, isEqual</h5>
    <h5>Instant : 에포크 타임부터 경과된 시간을 표현</h5>
    <h5>Instant now2 = now.getEpochSecond(); now.getNano();</h5>
    <h5>int result = date1.compareTo(date2)</h5>
  </section>
  <section>
    <h2>TemporalAdjusters</h2>
    <pre>LocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));<br/>
    firstDayOfNexYear(); firstDAyOfNextMonth(); firstDayOfYear(); firstDayOfMonth();<br/>
    firstInMonth(DayOfWeek dayOfWeek); lastInMonth(DayOfWeek dayOfWeek);<br/>
    previous(DayOfWeek dayOfWeek); previousOrSame(DayOfWeek dayOfWeek);<br/>
    next(DayOfWeek dayOfWeek); nextOrSame(DayOfWeek dayOfWeek);</pre>
  </section>
  <section>
    <h2>ZonedDateTime</h2>
    <pre>{`ZoneId zid = ZoneId.of("Asia/Seoul");
  ZoneDateTime zdt = dateTime.atZone(zid);`}</pre>
    <h2>ZoneOffset, OffsetDateTime</h2>
    <pre>{`ZoneOffset krOffset = ZonedDateTime.now().getOffset();
    int krOffsetInSec = krOffset.get(ChronoField.OFFSET_SECONDS);`}</pre>
  </section>
  <section>
    <h2>Period, Duration</h2>
    <pre>Duration du = Duration.between(t1, t2);<br/>
  Period pe = today.until(myBirthDay);<br/>
  long dday = today.until(myBirthDay, ChronoUnit.DAYS);</pre>
  </section>
  <section>
    <h2>formatting</h2>
    <pre>LocalDate date = LocalDate.of(2024,12,3);<br/>
    String YYYYmmdd = date.format(DateTimeFormatter.ISO_LOCAL_DATE);</pre>
    <pre>LocalDate date = LocalDate.parse("2024.12.3", DateTimeFormatter.ISO_LOCAL_DATE);</pre>
  <pre>ISO_DATE_TIME, ISO_LOCAL_DATE, ISO_LOCAL_TIME, KSO_OFFSET_DATE, <br/>
  ISO_OFFSET_TIME, ISO_INSTANT, BASIC_ISO_DATE, ISO_DATE, ISO_TIME, <br/>
  ISO_ORDINAL_DATE,ISO_WEEK_DATE, RFC_1123_DATE_TIME</pre>
    <pre>DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")<br/>
    LocalDateTime date = LocalDateTime.parse("2022-12-11 23:22:22", formatter)<br/>
    y;년도, M;월, Q;분기, D;일, E:요일, a;오전/오후,<br/>
      H;시간, h;시간, m;분, s;초, S;밀리초, n;나노초, z; zone name, Z;zone-offset</pre>
  </section>
  <section>
    <h2>locale에 종속된 형식화</h2>
    <pre>DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT);</pre>
    <h3>FULL, LONG, MEDIUM, SHORT</h3>
    <pre>String shortFormat = formatter.format(LocalDate.now());</pre>
  </section>
    </div>
  )
}

export default JavaDateTime
