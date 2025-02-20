# `googleNetappVolumeQuotaRule` Submodule <a name="`googleNetappVolumeQuotaRule` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeQuotaRule <a name="GoogleNetappVolumeQuotaRule" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule google_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRule;

GoogleNetappVolumeQuotaRule.Builder.create(Construct scope, java.lang.String id)
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
    .diskLimitMib(java.lang.Number)
    .name(java.lang.String)
    .type(java.lang.String)
    .volumeName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .target(java.lang.String)
//  .timeouts(GoogleNetappVolumeQuotaRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.diskLimitMib">diskLimitMib</a></code> | <code>java.lang.Number</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for the quota rule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.diskLimitMib"></a>

- *Type:* java.lang.Number

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#disk_limit_mib GoogleNetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#name GoogleNetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#type GoogleNetappVolumeQuotaRule#type}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.volumeName"></a>

- *Type:* java.lang.String

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#volume_name GoogleNetappVolumeQuotaRule#volume_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#description GoogleNetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#labels GoogleNetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#location GoogleNetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.target"></a>

- *Type:* java.lang.String

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#target GoogleNetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#timeouts GoogleNetappVolumeQuotaRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetappVolumeQuotaRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRule;

GoogleNetappVolumeQuotaRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRule;

GoogleNetappVolumeQuotaRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRule;

GoogleNetappVolumeQuotaRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRule;

GoogleNetappVolumeQuotaRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetappVolumeQuotaRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetappVolumeQuotaRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput">diskLimitMibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib">diskLimitMib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts"></a>

```java
public GoogleNetappVolumeQuotaRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskLimitMibInput`<sup>Optional</sup> <a name="diskLimitMibInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput"></a>

```java
public java.lang.Number getDiskLimitMibInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib"></a>

```java
public java.lang.Number getDiskLimitMib();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeQuotaRuleConfig <a name="GoogleNetappVolumeQuotaRuleConfig" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRuleConfig;

GoogleNetappVolumeQuotaRuleConfig.builder()
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
    .diskLimitMib(java.lang.Number)
    .name(java.lang.String)
    .type(java.lang.String)
    .volumeName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .target(java.lang.String)
//  .timeouts(GoogleNetappVolumeQuotaRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib">diskLimitMib</a></code> | <code>java.lang.Number</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for the quota rule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target">target</a></code> | <code>java.lang.String</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib"></a>

```java
public java.lang.Number getDiskLimitMib();
```

- *Type:* java.lang.Number

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#disk_limit_mib GoogleNetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#name GoogleNetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#type GoogleNetappVolumeQuotaRule#type}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#volume_name GoogleNetappVolumeQuotaRule#volume_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#description GoogleNetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#labels GoogleNetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#location GoogleNetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#target GoogleNetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts"></a>

```java
public GoogleNetappVolumeQuotaRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#timeouts GoogleNetappVolumeQuotaRule#timeouts}

---

### GoogleNetappVolumeQuotaRuleTimeouts <a name="GoogleNetappVolumeQuotaRuleTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRuleTimeouts;

GoogleNetappVolumeQuotaRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeQuotaRuleTimeoutsOutputReference <a name="GoogleNetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_volume_quota_rule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference;

new GoogleNetappVolumeQuotaRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---



