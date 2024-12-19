# `googleSecurityScannerScanConfig` Submodule <a name="`googleSecurityScannerScanConfig` Submodule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityScannerScanConfig <a name="GoogleSecurityScannerScanConfig" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config google_security_scanner_scan_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  starting_urls: typing.List[str],
  authentication: GoogleSecurityScannerScanConfigAuthentication = None,
  blacklist_patterns: typing.List[str] = None,
  export_to_security_command_center: str = None,
  id: str = None,
  max_qps: typing.Union[int, float] = None,
  project: str = None,
  schedule: GoogleSecurityScannerScanConfigSchedule = None,
  target_platforms: typing.List[str] = None,
  timeouts: GoogleSecurityScannerScanConfigTimeouts = None,
  user_agent: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user provider display name of the ScanConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.startingUrls">starting_urls</a></code> | <code>typing.List[str]</code> | The starting URLs from which the scanner finds site pages. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.blacklistPatterns">blacklist_patterns</a></code> | <code>typing.List[str]</code> | The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.exportToSecurityCommandCenter">export_to_security_command_center</a></code> | <code>str</code> | Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.maxQps">max_qps</a></code> | <code>typing.Union[int, float]</code> | The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.targetPlatforms">target_platforms</a></code> | <code>typing.List[str]</code> | Set of Cloud Platforms targeted by the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.userAgent">user_agent</a></code> | <code>str</code> | Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.displayName"></a>

- *Type:* str

The user provider display name of the ScanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#display_name GoogleSecurityScannerScanConfig#display_name}

---

##### `starting_urls`<sup>Required</sup> <a name="starting_urls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.startingUrls"></a>

- *Type:* typing.List[str]

The starting URLs from which the scanner finds site pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#starting_urls GoogleSecurityScannerScanConfig#starting_urls}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#authentication GoogleSecurityScannerScanConfig#authentication}

---

##### `blacklist_patterns`<sup>Optional</sup> <a name="blacklist_patterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.blacklistPatterns"></a>

- *Type:* typing.List[str]

The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#blacklist_patterns GoogleSecurityScannerScanConfig#blacklist_patterns}

---

##### `export_to_security_command_center`<sup>Optional</sup> <a name="export_to_security_command_center" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.exportToSecurityCommandCenter"></a>

- *Type:* str

Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#export_to_security_command_center GoogleSecurityScannerScanConfig#export_to_security_command_center}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_qps`<sup>Optional</sup> <a name="max_qps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.maxQps"></a>

- *Type:* typing.Union[int, float]

The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#max_qps GoogleSecurityScannerScanConfig#max_qps}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#schedule GoogleSecurityScannerScanConfig#schedule}

---

##### `target_platforms`<sup>Optional</sup> <a name="target_platforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.targetPlatforms"></a>

- *Type:* typing.List[str]

Set of Cloud Platforms targeted by the scan.

If empty, APP_ENGINE will be used as a default. Possible values: ["APP_ENGINE", "COMPUTE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#target_platforms GoogleSecurityScannerScanConfig#target_platforms}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#timeouts GoogleSecurityScannerScanConfig#timeouts}

---

##### `user_agent`<sup>Optional</sup> <a name="user_agent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.userAgent"></a>

- *Type:* str

Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#user_agent GoogleSecurityScannerScanConfig#user_agent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetBlacklistPatterns">reset_blacklist_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetExportToSecurityCommandCenter">reset_export_to_security_command_center</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetMaxQps">reset_max_qps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTargetPlatforms">reset_target_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetUserAgent">reset_user_agent</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication"></a>

```python
def put_authentication(
  custom_account: GoogleSecurityScannerScanConfigAuthenticationCustomAccount = None,
  google_account: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount = None
) -> None
```

###### `custom_account`<sup>Optional</sup> <a name="custom_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication.parameter.customAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

custom_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#custom_account GoogleSecurityScannerScanConfig#custom_account}

---

###### `google_account`<sup>Optional</sup> <a name="google_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication.parameter.googleAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

google_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#google_account GoogleSecurityScannerScanConfig#google_account}

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule"></a>

```python
def put_schedule(
  interval_duration_days: typing.Union[int, float],
  schedule_time: str = None
) -> None
```

###### `interval_duration_days`<sup>Required</sup> <a name="interval_duration_days" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule.parameter.intervalDurationDays"></a>

- *Type:* typing.Union[int, float]

The duration of time between executions in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#interval_duration_days GoogleSecurityScannerScanConfig#interval_duration_days}

---

###### `schedule_time`<sup>Optional</sup> <a name="schedule_time" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule.parameter.scheduleTime"></a>

- *Type:* str

A timestamp indicates when the next run will be scheduled.

The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#schedule_time GoogleSecurityScannerScanConfig#schedule_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}.

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_blacklist_patterns` <a name="reset_blacklist_patterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetBlacklistPatterns"></a>

```python
def reset_blacklist_patterns() -> None
```

##### `reset_export_to_security_command_center` <a name="reset_export_to_security_command_center" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetExportToSecurityCommandCenter"></a>

```python
def reset_export_to_security_command_center() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_qps` <a name="reset_max_qps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetMaxQps"></a>

```python
def reset_max_qps() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_target_platforms` <a name="reset_target_platforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTargetPlatforms"></a>

```python
def reset_target_platforms() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_agent` <a name="reset_user_agent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetUserAgent"></a>

```python
def reset_user_agent() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSecurityScannerScanConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSecurityScannerScanConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecurityScannerScanConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecurityScannerScanConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecurityScannerScanConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference">GoogleSecurityScannerScanConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference">GoogleSecurityScannerScanConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference">GoogleSecurityScannerScanConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatternsInput">blacklist_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenterInput">export_to_security_command_center_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQpsInput">max_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrlsInput">starting_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatformsInput">target_platforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgentInput">user_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatterns">blacklist_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenter">export_to_security_command_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQps">max_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrls">starting_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatforms">target_platforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgent">user_agent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authentication"></a>

```python
authentication: GoogleSecurityScannerScanConfigAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference">GoogleSecurityScannerScanConfigAuthenticationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.schedule"></a>

```python
schedule: GoogleSecurityScannerScanConfigScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference">GoogleSecurityScannerScanConfigScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeouts"></a>

```python
timeouts: GoogleSecurityScannerScanConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference">GoogleSecurityScannerScanConfigTimeoutsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authenticationInput"></a>

```python
authentication_input: GoogleSecurityScannerScanConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---

##### `blacklist_patterns_input`<sup>Optional</sup> <a name="blacklist_patterns_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatternsInput"></a>

```python
blacklist_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `export_to_security_command_center_input`<sup>Optional</sup> <a name="export_to_security_command_center_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenterInput"></a>

```python
export_to_security_command_center_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_qps_input`<sup>Optional</sup> <a name="max_qps_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQpsInput"></a>

```python
max_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.scheduleInput"></a>

```python
schedule_input: GoogleSecurityScannerScanConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---

##### `starting_urls_input`<sup>Optional</sup> <a name="starting_urls_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrlsInput"></a>

```python
starting_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_platforms_input`<sup>Optional</sup> <a name="target_platforms_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatformsInput"></a>

```python
target_platforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSecurityScannerScanConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>]

---

##### `user_agent_input`<sup>Optional</sup> <a name="user_agent_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgentInput"></a>

```python
user_agent_input: str
```

- *Type:* str

---

##### `blacklist_patterns`<sup>Required</sup> <a name="blacklist_patterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatterns"></a>

```python
blacklist_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `export_to_security_command_center`<sup>Required</sup> <a name="export_to_security_command_center" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenter"></a>

```python
export_to_security_command_center: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_qps`<sup>Required</sup> <a name="max_qps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQps"></a>

```python
max_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `starting_urls`<sup>Required</sup> <a name="starting_urls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrls"></a>

```python
starting_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_platforms`<sup>Required</sup> <a name="target_platforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatforms"></a>

```python
target_platforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_agent`<sup>Required</sup> <a name="user_agent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgent"></a>

```python
user_agent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityScannerScanConfigAuthentication <a name="GoogleSecurityScannerScanConfigAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication(
  custom_account: GoogleSecurityScannerScanConfigAuthenticationCustomAccount = None,
  google_account: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.customAccount">custom_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | custom_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.googleAccount">google_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | google_account block. |

---

##### `custom_account`<sup>Optional</sup> <a name="custom_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.customAccount"></a>

```python
custom_account: GoogleSecurityScannerScanConfigAuthenticationCustomAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

custom_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#custom_account GoogleSecurityScannerScanConfig#custom_account}

---

##### `google_account`<sup>Optional</sup> <a name="google_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.googleAccount"></a>

```python
google_account: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

google_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#google_account GoogleSecurityScannerScanConfig#google_account}

---

### GoogleSecurityScannerScanConfigAuthenticationCustomAccount <a name="GoogleSecurityScannerScanConfigAuthenticationCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount(
  login_url: str,
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.loginUrl">login_url</a></code> | <code>str</code> | The login form URL of the website. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.password">password</a></code> | <code>str</code> | The password of the custom account. The credential is stored encrypted in GCP. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.username">username</a></code> | <code>str</code> | The user name of the custom account. |

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

The login form URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#login_url GoogleSecurityScannerScanConfig#login_url}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the custom account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.username"></a>

```python
username: str
```

- *Type:* str

The user name of the custom account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

### GoogleSecurityScannerScanConfigAuthenticationGoogleAccount <a name="GoogleSecurityScannerScanConfigAuthenticationGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.password">password</a></code> | <code>str</code> | The password of the Google account. The credential is stored encrypted in GCP. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.username">username</a></code> | <code>str</code> | The user name of the Google account. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the Google account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.username"></a>

```python
username: str
```

- *Type:* str

The user name of the Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

### GoogleSecurityScannerScanConfigConfig <a name="GoogleSecurityScannerScanConfigConfig" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  starting_urls: typing.List[str],
  authentication: GoogleSecurityScannerScanConfigAuthentication = None,
  blacklist_patterns: typing.List[str] = None,
  export_to_security_command_center: str = None,
  id: str = None,
  max_qps: typing.Union[int, float] = None,
  project: str = None,
  schedule: GoogleSecurityScannerScanConfigSchedule = None,
  target_platforms: typing.List[str] = None,
  timeouts: GoogleSecurityScannerScanConfigTimeouts = None,
  user_agent: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | The user provider display name of the ScanConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.startingUrls">starting_urls</a></code> | <code>typing.List[str]</code> | The starting URLs from which the scanner finds site pages. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.blacklistPatterns">blacklist_patterns</a></code> | <code>typing.List[str]</code> | The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.exportToSecurityCommandCenter">export_to_security_command_center</a></code> | <code>str</code> | Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.maxQps">max_qps</a></code> | <code>typing.Union[int, float]</code> | The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.targetPlatforms">target_platforms</a></code> | <code>typing.List[str]</code> | Set of Cloud Platforms targeted by the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.userAgent">user_agent</a></code> | <code>str</code> | Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user provider display name of the ScanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#display_name GoogleSecurityScannerScanConfig#display_name}

---

##### `starting_urls`<sup>Required</sup> <a name="starting_urls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.startingUrls"></a>

```python
starting_urls: typing.List[str]
```

- *Type:* typing.List[str]

The starting URLs from which the scanner finds site pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#starting_urls GoogleSecurityScannerScanConfig#starting_urls}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.authentication"></a>

```python
authentication: GoogleSecurityScannerScanConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#authentication GoogleSecurityScannerScanConfig#authentication}

---

##### `blacklist_patterns`<sup>Optional</sup> <a name="blacklist_patterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.blacklistPatterns"></a>

```python
blacklist_patterns: typing.List[str]
```

- *Type:* typing.List[str]

The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#blacklist_patterns GoogleSecurityScannerScanConfig#blacklist_patterns}

---

##### `export_to_security_command_center`<sup>Optional</sup> <a name="export_to_security_command_center" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.exportToSecurityCommandCenter"></a>

```python
export_to_security_command_center: str
```

- *Type:* str

Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#export_to_security_command_center GoogleSecurityScannerScanConfig#export_to_security_command_center}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_qps`<sup>Optional</sup> <a name="max_qps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.maxQps"></a>

```python
max_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#max_qps GoogleSecurityScannerScanConfig#max_qps}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.schedule"></a>

```python
schedule: GoogleSecurityScannerScanConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#schedule GoogleSecurityScannerScanConfig#schedule}

---

##### `target_platforms`<sup>Optional</sup> <a name="target_platforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.targetPlatforms"></a>

```python
target_platforms: typing.List[str]
```

- *Type:* typing.List[str]

Set of Cloud Platforms targeted by the scan.

If empty, APP_ENGINE will be used as a default. Possible values: ["APP_ENGINE", "COMPUTE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#target_platforms GoogleSecurityScannerScanConfig#target_platforms}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleSecurityScannerScanConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#timeouts GoogleSecurityScannerScanConfig#timeouts}

---

##### `user_agent`<sup>Optional</sup> <a name="user_agent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.userAgent"></a>

```python
user_agent: str
```

- *Type:* str

Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#user_agent GoogleSecurityScannerScanConfig#user_agent}

---

### GoogleSecurityScannerScanConfigSchedule <a name="GoogleSecurityScannerScanConfigSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule(
  interval_duration_days: typing.Union[int, float],
  schedule_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.intervalDurationDays">interval_duration_days</a></code> | <code>typing.Union[int, float]</code> | The duration of time between executions in days. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.scheduleTime">schedule_time</a></code> | <code>str</code> | A timestamp indicates when the next run will be scheduled. |

---

##### `interval_duration_days`<sup>Required</sup> <a name="interval_duration_days" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.intervalDurationDays"></a>

```python
interval_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of time between executions in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#interval_duration_days GoogleSecurityScannerScanConfig#interval_duration_days}

---

##### `schedule_time`<sup>Optional</sup> <a name="schedule_time" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.scheduleTime"></a>

```python
schedule_time: str
```

- *Type:* str

A timestamp indicates when the next run will be scheduled.

The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#schedule_time GoogleSecurityScannerScanConfig#schedule_time}

---

### GoogleSecurityScannerScanConfigTimeouts <a name="GoogleSecurityScannerScanConfigTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrlInput">login_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrl">login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_url_input`<sup>Optional</sup> <a name="login_url_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrlInput"></a>

```python
login_url_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecurityScannerScanConfigAuthenticationCustomAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---


### GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---


### GoogleSecurityScannerScanConfigAuthenticationOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount">put_custom_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount">put_google_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetCustomAccount">reset_custom_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetGoogleAccount">reset_google_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_account` <a name="put_custom_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount"></a>

```python
def put_custom_account(
  login_url: str,
  password: str,
  username: str
) -> None
```

###### `login_url`<sup>Required</sup> <a name="login_url" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount.parameter.loginUrl"></a>

- *Type:* str

The login form URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#login_url GoogleSecurityScannerScanConfig#login_url}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount.parameter.password"></a>

- *Type:* str

The password of the custom account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount.parameter.username"></a>

- *Type:* str

The user name of the custom account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

##### `put_google_account` <a name="put_google_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount"></a>

```python
def put_google_account(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount.parameter.password"></a>

- *Type:* str

The password of the Google account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount.parameter.username"></a>

- *Type:* str

The user name of the Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

##### `reset_custom_account` <a name="reset_custom_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetCustomAccount"></a>

```python
def reset_custom_account() -> None
```

##### `reset_google_account` <a name="reset_google_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetGoogleAccount"></a>

```python
def reset_google_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccount">custom_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccount">google_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccountInput">custom_account_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccountInput">google_account_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_account`<sup>Required</sup> <a name="custom_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccount"></a>

```python
custom_account: GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference</a>

---

##### `google_account`<sup>Required</sup> <a name="google_account" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccount"></a>

```python
google_account: GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference</a>

---

##### `custom_account_input`<sup>Optional</sup> <a name="custom_account_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccountInput"></a>

```python
custom_account_input: GoogleSecurityScannerScanConfigAuthenticationCustomAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---

##### `google_account_input`<sup>Optional</sup> <a name="google_account_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccountInput"></a>

```python
google_account_input: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecurityScannerScanConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---


### GoogleSecurityScannerScanConfigScheduleOutputReference <a name="GoogleSecurityScannerScanConfigScheduleOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resetScheduleTime">reset_schedule_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule_time` <a name="reset_schedule_time" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resetScheduleTime"></a>

```python
def reset_schedule_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDaysInput">interval_duration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTimeInput">schedule_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDays">interval_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTime">schedule_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_duration_days_input`<sup>Optional</sup> <a name="interval_duration_days_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDaysInput"></a>

```python
interval_duration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_time_input`<sup>Optional</sup> <a name="schedule_time_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTimeInput"></a>

```python
schedule_time_input: str
```

- *Type:* str

---

##### `interval_duration_days`<sup>Required</sup> <a name="interval_duration_days" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDays"></a>

```python
interval_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_time`<sup>Required</sup> <a name="schedule_time" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTime"></a>

```python
schedule_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecurityScannerScanConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---


### GoogleSecurityScannerScanConfigTimeoutsOutputReference <a name="GoogleSecurityScannerScanConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_security_scanner_scan_config

googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSecurityScannerScanConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>]

---



