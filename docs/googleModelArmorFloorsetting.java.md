# `googleModelArmorFloorsetting` Submodule <a name="`googleModelArmorFloorsetting` Submodule" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleModelArmorFloorsetting <a name="GoogleModelArmorFloorsetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting google_model_armor_floorsetting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsetting;

GoogleModelArmorFloorsetting.Builder.create(Construct scope, java.lang.String id)
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
    .filterConfig(GoogleModelArmorFloorsettingFilterConfig)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .aiPlatformFloorSetting(GoogleModelArmorFloorsettingAiPlatformFloorSetting)
//  .enableFloorSettingEnforcement(java.lang.Boolean)
//  .enableFloorSettingEnforcement(IResolvable)
//  .floorSettingMetadata(GoogleModelArmorFloorsettingFloorSettingMetadata)
//  .id(java.lang.String)
//  .integratedServices(java.util.List<java.lang.String>)
//  .timeouts(GoogleModelArmorFloorsettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting">aiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement">enableFloorSettingEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata">floorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.integratedServices">integratedServices</a></code> | <code>java.util.List<java.lang.String></code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.filterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#filter_config GoogleModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#location GoogleModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#parent GoogleModelArmorFloorsetting#parent}

---

##### `aiPlatformFloorSetting`<sup>Optional</sup> <a name="aiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#ai_platform_floor_setting GoogleModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enableFloorSettingEnforcement`<sup>Optional</sup> <a name="enableFloorSettingEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#enable_floor_setting_enforcement GoogleModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floorSettingMetadata`<sup>Optional</sup> <a name="floorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#floor_setting_metadata GoogleModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integratedServices`<sup>Optional</sup> <a name="integratedServices" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.integratedServices"></a>

- *Type:* java.util.List<java.lang.String>

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#integrated_services GoogleModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#timeouts GoogleModelArmorFloorsetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting">putAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig">putFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata">putFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetAiPlatformFloorSetting">resetAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetEnableFloorSettingEnforcement">resetEnableFloorSettingEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetFloorSettingMetadata">resetFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetIntegratedServices">resetIntegratedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiPlatformFloorSetting` <a name="putAiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting"></a>

```java
public void putAiPlatformFloorSetting(GoogleModelArmorFloorsettingAiPlatformFloorSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `putFilterConfig` <a name="putFilterConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig"></a>

```java
public void putFilterConfig(GoogleModelArmorFloorsettingFilterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---

##### `putFloorSettingMetadata` <a name="putFloorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata"></a>

```java
public void putFloorSettingMetadata(GoogleModelArmorFloorsettingFloorSettingMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts"></a>

```java
public void putTimeouts(GoogleModelArmorFloorsettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

---

##### `resetAiPlatformFloorSetting` <a name="resetAiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetAiPlatformFloorSetting"></a>

```java
public void resetAiPlatformFloorSetting()
```

##### `resetEnableFloorSettingEnforcement` <a name="resetEnableFloorSettingEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetEnableFloorSettingEnforcement"></a>

```java
public void resetEnableFloorSettingEnforcement()
```

##### `resetFloorSettingMetadata` <a name="resetFloorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetFloorSettingMetadata"></a>

```java
public void resetFloorSettingMetadata()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetId"></a>

```java
public void resetId()
```

##### `resetIntegratedServices` <a name="resetIntegratedServices" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetIntegratedServices"></a>

```java
public void resetIntegratedServices()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleModelArmorFloorsetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsetting;

GoogleModelArmorFloorsetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsetting;

GoogleModelArmorFloorsetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsetting;

GoogleModelArmorFloorsetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsetting;

GoogleModelArmorFloorsetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleModelArmorFloorsetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleModelArmorFloorsetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleModelArmorFloorsetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleModelArmorFloorsetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleModelArmorFloorsetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSetting">aiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference">GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadata">floorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference">GoogleModelArmorFloorsettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSettingInput">aiPlatformFloorSettingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcementInput">enableFloorSettingEnforcementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfigInput">filterConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadataInput">floorSettingMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServicesInput">integratedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcement">enableFloorSettingEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServices">integratedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aiPlatformFloorSetting`<sup>Required</sup> <a name="aiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSetting"></a>

```java
public GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference getAiPlatformFloorSetting();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference">GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfig"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigOutputReference getFilterConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigOutputReference</a>

---

##### `floorSettingMetadata`<sup>Required</sup> <a name="floorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadata"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference getFloorSettingMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeouts"></a>

```java
public GoogleModelArmorFloorsettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference">GoogleModelArmorFloorsettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aiPlatformFloorSettingInput`<sup>Optional</sup> <a name="aiPlatformFloorSettingInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSettingInput"></a>

```java
public GoogleModelArmorFloorsettingAiPlatformFloorSetting getAiPlatformFloorSettingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `enableFloorSettingEnforcementInput`<sup>Optional</sup> <a name="enableFloorSettingEnforcementInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcementInput"></a>

```java
public java.lang.Object getEnableFloorSettingEnforcementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterConfigInput`<sup>Optional</sup> <a name="filterConfigInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfigInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfig getFilterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---

##### `floorSettingMetadataInput`<sup>Optional</sup> <a name="floorSettingMetadataInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadataInput"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadata getFloorSettingMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integratedServicesInput`<sup>Optional</sup> <a name="integratedServicesInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServicesInput"></a>

```java
public java.util.List<java.lang.String> getIntegratedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

---

##### `enableFloorSettingEnforcement`<sup>Required</sup> <a name="enableFloorSettingEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcement"></a>

```java
public java.lang.Object getEnableFloorSettingEnforcement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integratedServices`<sup>Required</sup> <a name="integratedServices" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServices"></a>

```java
public java.util.List<java.lang.String> getIntegratedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleModelArmorFloorsettingAiPlatformFloorSetting <a name="GoogleModelArmorFloorsettingAiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting;

GoogleModelArmorFloorsettingAiPlatformFloorSetting.builder()
//  .enableCloudLogging(java.lang.Boolean)
//  .enableCloudLogging(IResolvable)
//  .inspectAndBlock(java.lang.Boolean)
//  .inspectAndBlock(IResolvable)
//  .inspectOnly(java.lang.Boolean)
//  .inspectOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock">inspectAndBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly">inspectOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `enableCloudLogging`<sup>Optional</sup> <a name="enableCloudLogging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging"></a>

```java
public java.lang.Object getEnableCloudLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#enable_cloud_logging GoogleModelArmorFloorsetting#enable_cloud_logging}

---

##### `inspectAndBlock`<sup>Optional</sup> <a name="inspectAndBlock" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock"></a>

```java
public java.lang.Object getInspectAndBlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#inspect_and_block GoogleModelArmorFloorsetting#inspect_and_block}

---

##### `inspectOnly`<sup>Optional</sup> <a name="inspectOnly" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly"></a>

```java
public java.lang.Object getInspectOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#inspect_only GoogleModelArmorFloorsetting#inspect_only}

---

### GoogleModelArmorFloorsettingConfig <a name="GoogleModelArmorFloorsettingConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingConfig;

GoogleModelArmorFloorsettingConfig.builder()
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
    .filterConfig(GoogleModelArmorFloorsettingFilterConfig)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .aiPlatformFloorSetting(GoogleModelArmorFloorsettingAiPlatformFloorSetting)
//  .enableFloorSettingEnforcement(java.lang.Boolean)
//  .enableFloorSettingEnforcement(IResolvable)
//  .floorSettingMetadata(GoogleModelArmorFloorsettingFloorSettingMetadata)
//  .id(java.lang.String)
//  .integratedServices(java.util.List<java.lang.String>)
//  .timeouts(GoogleModelArmorFloorsettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.aiPlatformFloorSetting">aiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement">enableFloorSettingEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.floorSettingMetadata">floorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.integratedServices">integratedServices</a></code> | <code>java.util.List<java.lang.String></code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.filterConfig"></a>

```java
public GoogleModelArmorFloorsettingFilterConfig getFilterConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#filter_config GoogleModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#location GoogleModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#parent GoogleModelArmorFloorsetting#parent}

---

##### `aiPlatformFloorSetting`<sup>Optional</sup> <a name="aiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.aiPlatformFloorSetting"></a>

```java
public GoogleModelArmorFloorsettingAiPlatformFloorSetting getAiPlatformFloorSetting();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#ai_platform_floor_setting GoogleModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enableFloorSettingEnforcement`<sup>Optional</sup> <a name="enableFloorSettingEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement"></a>

```java
public java.lang.Object getEnableFloorSettingEnforcement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#enable_floor_setting_enforcement GoogleModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floorSettingMetadata`<sup>Optional</sup> <a name="floorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.floorSettingMetadata"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadata getFloorSettingMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#floor_setting_metadata GoogleModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integratedServices`<sup>Optional</sup> <a name="integratedServices" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.integratedServices"></a>

```java
public java.util.List<java.lang.String> getIntegratedServices();
```

- *Type:* java.util.List<java.lang.String>

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#integrated_services GoogleModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.timeouts"></a>

```java
public GoogleModelArmorFloorsettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#timeouts GoogleModelArmorFloorsetting#timeouts}

---

### GoogleModelArmorFloorsettingFilterConfig <a name="GoogleModelArmorFloorsettingFilterConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfig;

GoogleModelArmorFloorsettingFilterConfig.builder()
//  .maliciousUriFilterSettings(GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings)
//  .piAndJailbreakFilterSettings(GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings)
//  .raiSettings(GoogleModelArmorFloorsettingFilterConfigRaiSettings)
//  .sdpSettings(GoogleModelArmorFloorsettingFilterConfigSdpSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings">maliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings">piAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.raiSettings">raiSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `maliciousUriFilterSettings`<sup>Optional</sup> <a name="maliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings getMaliciousUriFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#malicious_uri_filter_settings GoogleModelArmorFloorsetting#malicious_uri_filter_settings}

---

##### `piAndJailbreakFilterSettings`<sup>Optional</sup> <a name="piAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings getPiAndJailbreakFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#pi_and_jailbreak_filter_settings GoogleModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

##### `raiSettings`<sup>Optional</sup> <a name="raiSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.raiSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigRaiSettings getRaiSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#rai_settings GoogleModelArmorFloorsetting#rai_settings}

---

##### `sdpSettings`<sup>Optional</sup> <a name="sdpSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.sdpSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettings getSdpSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#sdp_settings GoogleModelArmorFloorsetting#sdp_settings}

---

### GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings <a name="GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings;

GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.builder()
//  .filterEnforcement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings <a name="GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings;

GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.builder()
//  .confidenceLevel(java.lang.String)
//  .filterEnforcement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFilterConfigRaiSettings <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings;

GoogleModelArmorFloorsettingFilterConfigRaiSettings.builder()
    .raiFilters(IResolvable)
    .raiFilters(java.util.List<GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters">raiFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>></code> | rai_filters block. |

---

##### `raiFilters`<sup>Required</sup> <a name="raiFilters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters"></a>

```java
public java.lang.Object getRaiFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#rai_filters GoogleModelArmorFloorsetting#rai_filters}

---

### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters;

GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.builder()
    .filterType(java.lang.String)
//  .confidenceLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#filter_type GoogleModelArmorFloorsetting#filter_type}

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettings <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings;

GoogleModelArmorFloorsettingFilterConfigSdpSettings.builder()
//  .advancedConfig(GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig)
//  .basicConfig(GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig">advancedConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig">basicConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advancedConfig`<sup>Optional</sup> <a name="advancedConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig getAdvancedConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#advanced_config GoogleModelArmorFloorsetting#advanced_config}

---

##### `basicConfig`<sup>Optional</sup> <a name="basicConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig getBasicConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#basic_config GoogleModelArmorFloorsetting#basic_config}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig;

GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.builder()
//  .deidentifyTemplate(java.lang.String)
//  .inspectTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | Sensitive Data Protection inspect template resource name. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#deidentify_template GoogleModelArmorFloorsetting#deidentify_template}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#inspect_template GoogleModelArmorFloorsetting#inspect_template}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig;

GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.builder()
//  .filterEnforcement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFloorSettingMetadata <a name="GoogleModelArmorFloorsettingFloorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata;

GoogleModelArmorFloorsettingFloorSettingMetadata.builder()
//  .multiLanguageDetection(GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection">multiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `multiLanguageDetection`<sup>Optional</sup> <a name="multiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection getMultiLanguageDetection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#multi_language_detection GoogleModelArmorFloorsetting#multi_language_detection}

---

### GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection <a name="GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection;

GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.builder()
    .enableMultiLanguageDetection(java.lang.Boolean)
    .enableMultiLanguageDetection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enableMultiLanguageDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, multi language detection will be enabled. |

---

##### `enableMultiLanguageDetection`<sup>Required</sup> <a name="enableMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```java
public java.lang.Object getEnableMultiLanguageDetection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#enable_multi_language_detection GoogleModelArmorFloorsetting#enable_multi_language_detection}

---

### GoogleModelArmorFloorsettingTimeouts <a name="GoogleModelArmorFloorsettingTimeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingTimeouts;

GoogleModelArmorFloorsettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference <a name="GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference;

new GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging">resetEnableCloudLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock">resetInspectAndBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly">resetInspectOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCloudLogging` <a name="resetEnableCloudLogging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging"></a>

```java
public void resetEnableCloudLogging()
```

##### `resetInspectAndBlock` <a name="resetInspectAndBlock" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock"></a>

```java
public void resetInspectAndBlock()
```

##### `resetInspectOnly` <a name="resetInspectOnly" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly"></a>

```java
public void resetInspectOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput">enableCloudLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput">inspectAndBlockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput">inspectOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock">inspectAndBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly">inspectOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableCloudLoggingInput`<sup>Optional</sup> <a name="enableCloudLoggingInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```java
public java.lang.Object getEnableCloudLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectAndBlockInput`<sup>Optional</sup> <a name="inspectAndBlockInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```java
public java.lang.Object getInspectAndBlockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectOnlyInput`<sup>Optional</sup> <a name="inspectOnlyInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput"></a>

```java
public java.lang.Object getInspectOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCloudLogging`<sup>Required</sup> <a name="enableCloudLogging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging"></a>

```java
public java.lang.Object getEnableCloudLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectAndBlock`<sup>Required</sup> <a name="inspectAndBlock" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock"></a>

```java
public java.lang.Object getInspectAndBlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectOnly`<sup>Required</sup> <a name="inspectOnly" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly"></a>

```java
public java.lang.Object getInspectOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingAiPlatformFloorSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---


### GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference;

new GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```java
public void resetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```java
public java.lang.String getFilterEnforcementInput();
```

- *Type:* java.lang.String

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference;

new GoogleModelArmorFloorsettingFilterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings">putMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings">putPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings">putRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings">putSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings">resetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">resetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings">resetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings">resetSdpSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaliciousUriFilterSettings` <a name="putMaliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```java
public void putMaliciousUriFilterSettings(GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `putPiAndJailbreakFilterSettings` <a name="putPiAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```java
public void putPiAndJailbreakFilterSettings(GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `putRaiSettings` <a name="putRaiSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings"></a>

```java
public void putRaiSettings(GoogleModelArmorFloorsettingFilterConfigRaiSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `putSdpSettings` <a name="putSdpSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings"></a>

```java
public void putSdpSettings(GoogleModelArmorFloorsettingFilterConfigSdpSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `resetMaliciousUriFilterSettings` <a name="resetMaliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```java
public void resetMaliciousUriFilterSettings()
```

##### `resetPiAndJailbreakFilterSettings` <a name="resetPiAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```java
public void resetPiAndJailbreakFilterSettings()
```

##### `resetRaiSettings` <a name="resetRaiSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings"></a>

```java
public void resetRaiSettings()
```

##### `resetSdpSettings` <a name="resetSdpSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings"></a>

```java
public void resetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings">maliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings">piAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings">raiSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">maliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">piAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput">raiSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput">sdpSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maliciousUriFilterSettings`<sup>Required</sup> <a name="maliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference getMaliciousUriFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `piAndJailbreakFilterSettings`<sup>Required</sup> <a name="piAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference getPiAndJailbreakFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `raiSettings`<sup>Required</sup> <a name="raiSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference getRaiSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a>

---

##### `sdpSettings`<sup>Required</sup> <a name="sdpSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference getSdpSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a>

---

##### `maliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="maliciousUriFilterSettingsInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings getMaliciousUriFilterSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `piAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="piAndJailbreakFilterSettingsInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings getPiAndJailbreakFilterSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `raiSettingsInput`<sup>Optional</sup> <a name="raiSettingsInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigRaiSettings getRaiSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `sdpSettingsInput`<sup>Optional</sup> <a name="sdpSettingsInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettings getSdpSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference;

new GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```java
public void resetConfidenceLevel()
```

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```java
public void resetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```java
public java.lang.String getConfidenceLevelInput();
```

- *Type:* java.lang.String

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```java
public java.lang.String getFilterEnforcementInput();
```

- *Type:* java.lang.String

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters">putRaiFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRaiFilters` <a name="putRaiFilters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```java
public void putRaiFilters(IResolvable OR java.util.List<GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters">raiFilters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">raiFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `raiFilters`<sup>Required</sup> <a name="raiFilters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList getRaiFilters();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `raiFiltersInput`<sup>Optional</sup> <a name="raiFiltersInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```java
public java.lang.Object getRaiFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigRaiSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```java
public void resetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```java
public java.lang.String getConfidenceLevelInput();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```java
public void resetDeidentifyTemplate()
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```java
public void resetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```java
public java.lang.String getDeidentifyTemplateInput();
```

- *Type:* java.lang.String

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```java
public java.lang.String getInspectTemplateInput();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```java
public void resetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```java
public java.lang.String getFilterEnforcementInput();
```

- *Type:* java.lang.String

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig">putAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig">putBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">resetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig">resetBasicConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedConfig` <a name="putAdvancedConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```java
public void putAdvancedConfig(GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `putBasicConfig` <a name="putBasicConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```java
public void putBasicConfig(GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `resetAdvancedConfig` <a name="resetAdvancedConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```java
public void resetAdvancedConfig()
```

##### `resetBasicConfig` <a name="resetBasicConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```java
public void resetBasicConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig">advancedConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig">basicConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advancedConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basicConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedConfig`<sup>Required</sup> <a name="advancedConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference getAdvancedConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basicConfig`<sup>Required</sup> <a name="basicConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference getBasicConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advancedConfigInput`<sup>Optional</sup> <a name="advancedConfigInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig getAdvancedConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basicConfigInput`<sup>Optional</sup> <a name="basicConfigInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig getBasicConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFilterConfigSdpSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---


### GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference <a name="GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference;

new GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enableMultiLanguageDetectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enableMultiLanguageDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="enableMultiLanguageDetectionInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```java
public java.lang.Object getEnableMultiLanguageDetectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableMultiLanguageDetection`<sup>Required</sup> <a name="enableMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```java
public java.lang.Object getEnableMultiLanguageDetection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---


### GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference <a name="GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference;

new GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection">putMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection">resetMultiLanguageDetection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiLanguageDetection` <a name="putMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection"></a>

```java
public void putMultiLanguageDetection(GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `resetMultiLanguageDetection` <a name="resetMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection"></a>

```java
public void resetMultiLanguageDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection">multiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput">multiLanguageDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiLanguageDetection`<sup>Required</sup> <a name="multiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference getMultiLanguageDetection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a>

---

##### `multiLanguageDetectionInput`<sup>Optional</sup> <a name="multiLanguageDetectionInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection getMultiLanguageDetectionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue"></a>

```java
public GoogleModelArmorFloorsettingFloorSettingMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---


### GoogleModelArmorFloorsettingTimeoutsOutputReference <a name="GoogleModelArmorFloorsettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_model_armor_floorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference;

new GoogleModelArmorFloorsettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

---



