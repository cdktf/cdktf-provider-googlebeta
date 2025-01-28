# `googleDialogflowCxSecuritySettings` Submodule <a name="`googleDialogflowCxSecuritySettings` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxSecuritySettings <a name="GoogleDialogflowCxSecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings google_dialogflow_cx_security_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettings;

GoogleDialogflowCxSecuritySettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .audioExportSettings(GoogleDialogflowCxSecuritySettingsAudioExportSettings)
//  .deidentifyTemplate(java.lang.String)
//  .id(java.lang.String)
//  .insightsExportSettings(GoogleDialogflowCxSecuritySettingsInsightsExportSettings)
//  .inspectTemplate(java.lang.String)
//  .project(java.lang.String)
//  .purgeDataTypes(java.util.List<java.lang.String>)
//  .redactionScope(java.lang.String)
//  .redactionStrategy(java.lang.String)
//  .retentionStrategy(java.lang.String)
//  .retentionWindowDays(java.lang.Number)
//  .timeouts(GoogleDialogflowCxSecuritySettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the security settings, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location these settings are located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.audioExportSettings">audioExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | audio_export_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.insightsExportSettings">insightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | insights_export_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.purgeDataTypes">purgeDataTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.redactionScope">redactionScope</a></code> | <code>java.lang.String</code> | Defines what types of data to redact. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.redactionStrategy">redactionStrategy</a></code> | <code>java.lang.String</code> | Defines how we redact data. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.retentionStrategy">retentionStrategy</a></code> | <code>java.lang.String</code> | Defines how long we retain persisted data that contains sensitive info. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.retentionWindowDays">retentionWindowDays</a></code> | <code>java.lang.Number</code> | Retains the data for the specified number of days. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the security settings, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#display_name GoogleDialogflowCxSecuritySettings#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location these settings are located in.

Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#location GoogleDialogflowCxSecuritySettings#location}

---

##### `audioExportSettings`<sup>Optional</sup> <a name="audioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.audioExportSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

audio_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_settings GoogleDialogflowCxSecuritySettings#audio_export_settings}

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.deidentifyTemplate"></a>

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#deidentify_template GoogleDialogflowCxSecuritySettings#deidentify_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insightsExportSettings`<sup>Optional</sup> <a name="insightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.insightsExportSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

insights_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#insights_export_settings GoogleDialogflowCxSecuritySettings#insights_export_settings}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.inspectTemplate"></a>

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#inspect_template GoogleDialogflowCxSecuritySettings#inspect_template}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}.

---

##### `purgeDataTypes`<sup>Optional</sup> <a name="purgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.purgeDataTypes"></a>

- *Type:* java.util.List<java.lang.String>

List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#purge_data_types GoogleDialogflowCxSecuritySettings#purge_data_types}

---

##### `redactionScope`<sup>Optional</sup> <a name="redactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.redactionScope"></a>

- *Type:* java.lang.String

Defines what types of data to redact.

If not set, defaults to not redacting any kind of data.

* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#redaction_scope GoogleDialogflowCxSecuritySettings#redaction_scope}

---

##### `redactionStrategy`<sup>Optional</sup> <a name="redactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.redactionStrategy"></a>

- *Type:* java.lang.String

Defines how we redact data.

If not set, defaults to not redacting.

* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#redaction_strategy GoogleDialogflowCxSecuritySettings#redaction_strategy}

---

##### `retentionStrategy`<sup>Optional</sup> <a name="retentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.retentionStrategy"></a>

- *Type:* java.lang.String

Defines how long we retain persisted data that contains sensitive info.

Only one of 'retention_window_days' and 'retention_strategy' may be set.

* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#retention_strategy GoogleDialogflowCxSecuritySettings#retention_strategy}

---

##### `retentionWindowDays`<sup>Optional</sup> <a name="retentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.retentionWindowDays"></a>

- *Type:* java.lang.Number

Retains the data for the specified number of days.

User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of 'retention_window_days' and 'retention_strategy' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#retention_window_days GoogleDialogflowCxSecuritySettings#retention_window_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#timeouts GoogleDialogflowCxSecuritySettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings">putAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings">putInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetAudioExportSettings">resetAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInsightsExportSettings">resetInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetPurgeDataTypes">resetPurgeDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionScope">resetRedactionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionStrategy">resetRedactionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionStrategy">resetRetentionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionWindowDays">resetRetentionWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAudioExportSettings` <a name="putAudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings"></a>

```java
public void putAudioExportSettings(GoogleDialogflowCxSecuritySettingsAudioExportSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `putInsightsExportSettings` <a name="putInsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings"></a>

```java
public void putInsightsExportSettings(GoogleDialogflowCxSecuritySettingsInsightsExportSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxSecuritySettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---

##### `resetAudioExportSettings` <a name="resetAudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetAudioExportSettings"></a>

```java
public void resetAudioExportSettings()
```

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetDeidentifyTemplate"></a>

```java
public void resetDeidentifyTemplate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetId"></a>

```java
public void resetId()
```

##### `resetInsightsExportSettings` <a name="resetInsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInsightsExportSettings"></a>

```java
public void resetInsightsExportSettings()
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInspectTemplate"></a>

```java
public void resetInspectTemplate()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetProject"></a>

```java
public void resetProject()
```

##### `resetPurgeDataTypes` <a name="resetPurgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetPurgeDataTypes"></a>

```java
public void resetPurgeDataTypes()
```

##### `resetRedactionScope` <a name="resetRedactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionScope"></a>

```java
public void resetRedactionScope()
```

##### `resetRedactionStrategy` <a name="resetRedactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionStrategy"></a>

```java
public void resetRedactionStrategy()
```

##### `resetRetentionStrategy` <a name="resetRetentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionStrategy"></a>

```java
public void resetRetentionStrategy()
```

##### `resetRetentionWindowDays` <a name="resetRetentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionWindowDays"></a>

```java
public void resetRetentionWindowDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettings;

GoogleDialogflowCxSecuritySettings.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettings;

GoogleDialogflowCxSecuritySettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettings;

GoogleDialogflowCxSecuritySettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettings;

GoogleDialogflowCxSecuritySettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxSecuritySettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxSecuritySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettings">audioExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettings">insightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference">GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettingsInput">audioExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettingsInput">insightsExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypesInput">purgeDataTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScopeInput">redactionScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategyInput">redactionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategyInput">retentionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDaysInput">retentionWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypes">purgeDataTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScope">redactionScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategy">redactionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategy">retentionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDays">retentionWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `audioExportSettings`<sup>Required</sup> <a name="audioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettings"></a>

```java
public GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference getAudioExportSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a>

---

##### `insightsExportSettings`<sup>Required</sup> <a name="insightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettings"></a>

```java
public GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference getInsightsExportSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeouts"></a>

```java
public GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference">GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference</a>

---

##### `audioExportSettingsInput`<sup>Optional</sup> <a name="audioExportSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettingsInput"></a>

```java
public GoogleDialogflowCxSecuritySettingsAudioExportSettings getAudioExportSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplateInput"></a>

```java
public java.lang.String getDeidentifyTemplateInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insightsExportSettingsInput`<sup>Optional</sup> <a name="insightsExportSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettingsInput"></a>

```java
public GoogleDialogflowCxSecuritySettingsInsightsExportSettings getInsightsExportSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplateInput"></a>

```java
public java.lang.String getInspectTemplateInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `purgeDataTypesInput`<sup>Optional</sup> <a name="purgeDataTypesInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypesInput"></a>

```java
public java.util.List<java.lang.String> getPurgeDataTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redactionScopeInput`<sup>Optional</sup> <a name="redactionScopeInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScopeInput"></a>

```java
public java.lang.String getRedactionScopeInput();
```

- *Type:* java.lang.String

---

##### `redactionStrategyInput`<sup>Optional</sup> <a name="redactionStrategyInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategyInput"></a>

```java
public java.lang.String getRedactionStrategyInput();
```

- *Type:* java.lang.String

---

##### `retentionStrategyInput`<sup>Optional</sup> <a name="retentionStrategyInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategyInput"></a>

```java
public java.lang.String getRetentionStrategyInput();
```

- *Type:* java.lang.String

---

##### `retentionWindowDaysInput`<sup>Optional</sup> <a name="retentionWindowDaysInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDaysInput"></a>

```java
public java.lang.Number getRetentionWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `purgeDataTypes`<sup>Required</sup> <a name="purgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypes"></a>

```java
public java.util.List<java.lang.String> getPurgeDataTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redactionScope`<sup>Required</sup> <a name="redactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScope"></a>

```java
public java.lang.String getRedactionScope();
```

- *Type:* java.lang.String

---

##### `redactionStrategy`<sup>Required</sup> <a name="redactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategy"></a>

```java
public java.lang.String getRedactionStrategy();
```

- *Type:* java.lang.String

---

##### `retentionStrategy`<sup>Required</sup> <a name="retentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategy"></a>

```java
public java.lang.String getRetentionStrategy();
```

- *Type:* java.lang.String

---

##### `retentionWindowDays`<sup>Required</sup> <a name="retentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDays"></a>

```java
public java.lang.Number getRetentionWindowDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxSecuritySettingsAudioExportSettings <a name="GoogleDialogflowCxSecuritySettingsAudioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsAudioExportSettings;

GoogleDialogflowCxSecuritySettingsAudioExportSettings.builder()
//  .audioExportPattern(java.lang.String)
//  .audioFormat(java.lang.String)
//  .enableAudioRedaction(java.lang.Boolean)
//  .enableAudioRedaction(IResolvable)
//  .gcsBucket(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern">audioExportPattern</a></code> | <code>java.lang.String</code> | Filename pattern for exported audio. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat">audioFormat</a></code> | <code>java.lang.String</code> | File format for exported audio file. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction">enableAudioRedaction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable audio redaction if it is true. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | Cloud Storage bucket to export audio record to. |

---

##### `audioExportPattern`<sup>Optional</sup> <a name="audioExportPattern" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern"></a>

```java
public java.lang.String getAudioExportPattern();
```

- *Type:* java.lang.String

Filename pattern for exported audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_pattern GoogleDialogflowCxSecuritySettings#audio_export_pattern}

---

##### `audioFormat`<sup>Optional</sup> <a name="audioFormat" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat"></a>

```java
public java.lang.String getAudioFormat();
```

- *Type:* java.lang.String

File format for exported audio file.

Currently only in telephony recordings.

* MULAW: G.711 mu-law PCM with 8kHz sample rate.
* MP3: MP3 file format.
* OGG: OGG Vorbis. Possible values: ["MULAW", "MP3", "OGG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#audio_format GoogleDialogflowCxSecuritySettings#audio_format}

---

##### `enableAudioRedaction`<sup>Optional</sup> <a name="enableAudioRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction"></a>

```java
public java.lang.Object getEnableAudioRedaction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable audio redaction if it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#enable_audio_redaction GoogleDialogflowCxSecuritySettings#enable_audio_redaction}

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

Cloud Storage bucket to export audio record to.

Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#gcs_bucket GoogleDialogflowCxSecuritySettings#gcs_bucket}

---

### GoogleDialogflowCxSecuritySettingsConfig <a name="GoogleDialogflowCxSecuritySettingsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsConfig;

GoogleDialogflowCxSecuritySettingsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .audioExportSettings(GoogleDialogflowCxSecuritySettingsAudioExportSettings)
//  .deidentifyTemplate(java.lang.String)
//  .id(java.lang.String)
//  .insightsExportSettings(GoogleDialogflowCxSecuritySettingsInsightsExportSettings)
//  .inspectTemplate(java.lang.String)
//  .project(java.lang.String)
//  .purgeDataTypes(java.util.List<java.lang.String>)
//  .redactionScope(java.lang.String)
//  .redactionStrategy(java.lang.String)
//  .retentionStrategy(java.lang.String)
//  .retentionWindowDays(java.lang.Number)
//  .timeouts(GoogleDialogflowCxSecuritySettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the security settings, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location these settings are located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.audioExportSettings">audioExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | audio_export_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.insightsExportSettings">insightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | insights_export_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.purgeDataTypes">purgeDataTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionScope">redactionScope</a></code> | <code>java.lang.String</code> | Defines what types of data to redact. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionStrategy">redactionStrategy</a></code> | <code>java.lang.String</code> | Defines how we redact data. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionStrategy">retentionStrategy</a></code> | <code>java.lang.String</code> | Defines how long we retain persisted data that contains sensitive info. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionWindowDays">retentionWindowDays</a></code> | <code>java.lang.Number</code> | Retains the data for the specified number of days. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the security settings, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#display_name GoogleDialogflowCxSecuritySettings#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location these settings are located in.

Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#location GoogleDialogflowCxSecuritySettings#location}

---

##### `audioExportSettings`<sup>Optional</sup> <a name="audioExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.audioExportSettings"></a>

```java
public GoogleDialogflowCxSecuritySettingsAudioExportSettings getAudioExportSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

audio_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_settings GoogleDialogflowCxSecuritySettings#audio_export_settings}

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#deidentify_template GoogleDialogflowCxSecuritySettings#deidentify_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insightsExportSettings`<sup>Optional</sup> <a name="insightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.insightsExportSettings"></a>

```java
public GoogleDialogflowCxSecuritySettingsInsightsExportSettings getInsightsExportSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

insights_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#insights_export_settings GoogleDialogflowCxSecuritySettings#insights_export_settings}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#inspect_template GoogleDialogflowCxSecuritySettings#inspect_template}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}.

---

##### `purgeDataTypes`<sup>Optional</sup> <a name="purgeDataTypes" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.purgeDataTypes"></a>

```java
public java.util.List<java.lang.String> getPurgeDataTypes();
```

- *Type:* java.util.List<java.lang.String>

List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#purge_data_types GoogleDialogflowCxSecuritySettings#purge_data_types}

---

##### `redactionScope`<sup>Optional</sup> <a name="redactionScope" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionScope"></a>

```java
public java.lang.String getRedactionScope();
```

- *Type:* java.lang.String

Defines what types of data to redact.

If not set, defaults to not redacting any kind of data.

* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#redaction_scope GoogleDialogflowCxSecuritySettings#redaction_scope}

---

##### `redactionStrategy`<sup>Optional</sup> <a name="redactionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionStrategy"></a>

```java
public java.lang.String getRedactionStrategy();
```

- *Type:* java.lang.String

Defines how we redact data.

If not set, defaults to not redacting.

* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#redaction_strategy GoogleDialogflowCxSecuritySettings#redaction_strategy}

---

##### `retentionStrategy`<sup>Optional</sup> <a name="retentionStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionStrategy"></a>

```java
public java.lang.String getRetentionStrategy();
```

- *Type:* java.lang.String

Defines how long we retain persisted data that contains sensitive info.

Only one of 'retention_window_days' and 'retention_strategy' may be set.

* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#retention_strategy GoogleDialogflowCxSecuritySettings#retention_strategy}

---

##### `retentionWindowDays`<sup>Optional</sup> <a name="retentionWindowDays" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionWindowDays"></a>

```java
public java.lang.Number getRetentionWindowDays();
```

- *Type:* java.lang.Number

Retains the data for the specified number of days.

User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of 'retention_window_days' and 'retention_strategy' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#retention_window_days GoogleDialogflowCxSecuritySettings#retention_window_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxSecuritySettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#timeouts GoogleDialogflowCxSecuritySettings#timeouts}

---

### GoogleDialogflowCxSecuritySettingsInsightsExportSettings <a name="GoogleDialogflowCxSecuritySettingsInsightsExportSettings" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings;

GoogleDialogflowCxSecuritySettingsInsightsExportSettings.builder()
    .enableInsightsExport(java.lang.Boolean)
    .enableInsightsExport(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport">enableInsightsExport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. |

---

##### `enableInsightsExport`<sup>Required</sup> <a name="enableInsightsExport" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport"></a>

```java
public java.lang.Object getEnableInsightsExport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#enable_insights_export GoogleDialogflowCxSecuritySettings#enable_insights_export}

---

### GoogleDialogflowCxSecuritySettingsTimeouts <a name="GoogleDialogflowCxSecuritySettingsTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsTimeouts;

GoogleDialogflowCxSecuritySettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#create GoogleDialogflowCxSecuritySettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#delete GoogleDialogflowCxSecuritySettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#update GoogleDialogflowCxSecuritySettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#create GoogleDialogflowCxSecuritySettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#delete GoogleDialogflowCxSecuritySettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_security_settings#update GoogleDialogflowCxSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference <a name="GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference;

new GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern">resetAudioExportPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat">resetAudioFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction">resetEnableAudioRedaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioExportPattern` <a name="resetAudioExportPattern" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern"></a>

```java
public void resetAudioExportPattern()
```

##### `resetAudioFormat` <a name="resetAudioFormat" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat"></a>

```java
public void resetAudioFormat()
```

##### `resetEnableAudioRedaction` <a name="resetEnableAudioRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction"></a>

```java
public void resetEnableAudioRedaction()
```

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket"></a>

```java
public void resetGcsBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput">audioExportPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput">audioFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput">enableAudioRedactionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput">gcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern">audioExportPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat">audioFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction">enableAudioRedaction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioExportPatternInput`<sup>Optional</sup> <a name="audioExportPatternInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput"></a>

```java
public java.lang.String getAudioExportPatternInput();
```

- *Type:* java.lang.String

---

##### `audioFormatInput`<sup>Optional</sup> <a name="audioFormatInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput"></a>

```java
public java.lang.String getAudioFormatInput();
```

- *Type:* java.lang.String

---

##### `enableAudioRedactionInput`<sup>Optional</sup> <a name="enableAudioRedactionInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput"></a>

```java
public java.lang.Object getEnableAudioRedactionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput"></a>

```java
public java.lang.String getGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `audioExportPattern`<sup>Required</sup> <a name="audioExportPattern" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern"></a>

```java
public java.lang.String getAudioExportPattern();
```

- *Type:* java.lang.String

---

##### `audioFormat`<sup>Required</sup> <a name="audioFormat" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat"></a>

```java
public java.lang.String getAudioFormat();
```

- *Type:* java.lang.String

---

##### `enableAudioRedaction`<sup>Required</sup> <a name="enableAudioRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction"></a>

```java
public java.lang.Object getEnableAudioRedaction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxSecuritySettingsAudioExportSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---


### GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference <a name="GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference;

new GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput">enableInsightsExportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport">enableInsightsExport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInsightsExportInput`<sup>Optional</sup> <a name="enableInsightsExportInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput"></a>

```java
public java.lang.Object getEnableInsightsExportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableInsightsExport`<sup>Required</sup> <a name="enableInsightsExport" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport"></a>

```java
public java.lang.Object getEnableInsightsExport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxSecuritySettingsInsightsExportSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---


### GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference <a name="GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_security_settings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference;

new GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---



