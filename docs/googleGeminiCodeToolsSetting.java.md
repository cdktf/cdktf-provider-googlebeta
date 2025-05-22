# `googleGeminiCodeToolsSetting` Submodule <a name="`googleGeminiCodeToolsSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiCodeToolsSetting <a name="GoogleGeminiCodeToolsSetting" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting google_gemini_code_tools_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSetting;

GoogleGeminiCodeToolsSetting.Builder.create(Construct scope, java.lang.String id)
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
    .codeToolsSettingId(java.lang.String)
    .enabledTool(IResolvable)
    .enabledTool(java.util.List<GoogleGeminiCodeToolsSettingEnabledTool>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiCodeToolsSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId">codeToolsSettingId</a></code> | <code>java.lang.String</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.enabledTool">enabledTool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>></code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId"></a>

- *Type:* java.lang.String

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#code_tools_setting_id GoogleGeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.enabledTool"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>>

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#enabled_tool GoogleGeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#labels GoogleGeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#location GoogleGeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#timeouts GoogleGeminiCodeToolsSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool">putEnabledTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnabledTool` <a name="putEnabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool"></a>

```java
public void putEnabledTool(IResolvable OR java.util.List<GoogleGeminiCodeToolsSettingEnabledTool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts"></a>

```java
public void putTimeouts(GoogleGeminiCodeToolsSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSetting;

GoogleGeminiCodeToolsSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSetting;

GoogleGeminiCodeToolsSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSetting;

GoogleGeminiCodeToolsSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSetting;

GoogleGeminiCodeToolsSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiCodeToolsSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiCodeToolsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiCodeToolsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiCodeToolsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledTool">enabledTool</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList">GoogleGeminiCodeToolsSettingEnabledToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference">GoogleGeminiCodeToolsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingIdInput">codeToolsSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledToolInput">enabledToolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledTool"></a>

```java
public GoogleGeminiCodeToolsSettingEnabledToolList getEnabledTool();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList">GoogleGeminiCodeToolsSettingEnabledToolList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeouts"></a>

```java
public GoogleGeminiCodeToolsSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference">GoogleGeminiCodeToolsSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `codeToolsSettingIdInput`<sup>Optional</sup> <a name="codeToolsSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingIdInput"></a>

```java
public java.lang.String getCodeToolsSettingIdInput();
```

- *Type:* java.lang.String

---

##### `enabledToolInput`<sup>Optional</sup> <a name="enabledToolInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledToolInput"></a>

```java
public java.lang.Object getEnabledToolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingId"></a>

```java
public java.lang.String getCodeToolsSettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiCodeToolsSettingConfig <a name="GoogleGeminiCodeToolsSettingConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingConfig;

GoogleGeminiCodeToolsSettingConfig.builder()
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
    .codeToolsSettingId(java.lang.String)
    .enabledTool(IResolvable)
    .enabledTool(java.util.List<GoogleGeminiCodeToolsSettingEnabledTool>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiCodeToolsSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.codeToolsSettingId">codeToolsSettingId</a></code> | <code>java.lang.String</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.enabledTool">enabledTool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>></code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeToolsSettingId`<sup>Required</sup> <a name="codeToolsSettingId" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.codeToolsSettingId"></a>

```java
public java.lang.String getCodeToolsSettingId();
```

- *Type:* java.lang.String

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#code_tools_setting_id GoogleGeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabledTool`<sup>Required</sup> <a name="enabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.enabledTool"></a>

```java
public java.lang.Object getEnabledTool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>>

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#enabled_tool GoogleGeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#labels GoogleGeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#location GoogleGeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.timeouts"></a>

```java
public GoogleGeminiCodeToolsSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#timeouts GoogleGeminiCodeToolsSetting#timeouts}

---

### GoogleGeminiCodeToolsSettingEnabledTool <a name="GoogleGeminiCodeToolsSettingEnabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingEnabledTool;

GoogleGeminiCodeToolsSettingEnabledTool.builder()
    .handle(java.lang.String)
    .tool(java.lang.String)
//  .accountConnector(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<GoogleGeminiCodeToolsSettingEnabledToolConfig>)
//  .uriOverride(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.handle">handle</a></code> | <code>java.lang.String</code> | Handle used to invoke the tool. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.tool">tool</a></code> | <code>java.lang.String</code> | Link to the Tool. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.accountConnector">accountConnector</a></code> | <code>java.lang.String</code> | Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.uriOverride">uriOverride</a></code> | <code>java.lang.String</code> | Overridden URI, if allowed by Tool. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

Handle used to invoke the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#handle GoogleGeminiCodeToolsSetting#handle}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

Link to the Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#tool GoogleGeminiCodeToolsSetting#tool}

---

##### `accountConnector`<sup>Optional</sup> <a name="accountConnector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.accountConnector"></a>

```java
public java.lang.String getAccountConnector();
```

- *Type:* java.lang.String

Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#account_connector GoogleGeminiCodeToolsSetting#account_connector}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#config GoogleGeminiCodeToolsSetting#config}

---

##### `uriOverride`<sup>Optional</sup> <a name="uriOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.uriOverride"></a>

```java
public java.lang.String getUriOverride();
```

- *Type:* java.lang.String

Overridden URI, if allowed by Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#uri_override GoogleGeminiCodeToolsSetting#uri_override}

---

### GoogleGeminiCodeToolsSettingEnabledToolConfig <a name="GoogleGeminiCodeToolsSettingEnabledToolConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingEnabledToolConfig;

GoogleGeminiCodeToolsSettingEnabledToolConfig.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.key">key</a></code> | <code>java.lang.String</code> | Key of the configuration item. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.value">value</a></code> | <code>java.lang.String</code> | Value of the configuration item. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#key GoogleGeminiCodeToolsSetting#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#value GoogleGeminiCodeToolsSetting#value}

---

### GoogleGeminiCodeToolsSettingTimeouts <a name="GoogleGeminiCodeToolsSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingTimeouts;

GoogleGeminiCodeToolsSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiCodeToolsSettingEnabledToolConfigList <a name="GoogleGeminiCodeToolsSettingEnabledToolConfigList" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingEnabledToolConfigList;

new GoogleGeminiCodeToolsSettingEnabledToolConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get"></a>

```java
public GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>>

---


### GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference <a name="GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference;

new GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>

---


### GoogleGeminiCodeToolsSettingEnabledToolList <a name="GoogleGeminiCodeToolsSettingEnabledToolList" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingEnabledToolList;

new GoogleGeminiCodeToolsSettingEnabledToolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get"></a>

```java
public GoogleGeminiCodeToolsSettingEnabledToolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>>

---


### GoogleGeminiCodeToolsSettingEnabledToolOutputReference <a name="GoogleGeminiCodeToolsSettingEnabledToolOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference;

new GoogleGeminiCodeToolsSettingEnabledToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector">resetAccountConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride">resetUriOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<GoogleGeminiCodeToolsSettingEnabledToolConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>>

---

##### `resetAccountConnector` <a name="resetAccountConnector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector"></a>

```java
public void resetAccountConnector()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetUriOverride` <a name="resetUriOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride"></a>

```java
public void resetUriOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList">GoogleGeminiCodeToolsSettingEnabledToolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput">accountConnectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput">handleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput">toolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput">uriOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector">accountConnector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handle">handle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.tool">tool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride">uriOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.config"></a>

```java
public GoogleGeminiCodeToolsSettingEnabledToolConfigList getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList">GoogleGeminiCodeToolsSettingEnabledToolConfigList</a>

---

##### `accountConnectorInput`<sup>Optional</sup> <a name="accountConnectorInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput"></a>

```java
public java.lang.String getAccountConnectorInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>>

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput"></a>

```java
public java.lang.String getHandleInput();
```

- *Type:* java.lang.String

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput"></a>

```java
public java.lang.String getToolInput();
```

- *Type:* java.lang.String

---

##### `uriOverrideInput`<sup>Optional</sup> <a name="uriOverrideInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput"></a>

```java
public java.lang.String getUriOverrideInput();
```

- *Type:* java.lang.String

---

##### `accountConnector`<sup>Required</sup> <a name="accountConnector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector"></a>

```java
public java.lang.String getAccountConnector();
```

- *Type:* java.lang.String

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

---

##### `uriOverride`<sup>Required</sup> <a name="uriOverride" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride"></a>

```java
public java.lang.String getUriOverride();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>

---


### GoogleGeminiCodeToolsSettingTimeoutsOutputReference <a name="GoogleGeminiCodeToolsSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_code_tools_setting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference;

new GoogleGeminiCodeToolsSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

---



