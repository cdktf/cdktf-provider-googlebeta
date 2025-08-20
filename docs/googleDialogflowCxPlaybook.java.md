# `googleDialogflowCxPlaybook` Submodule <a name="`googleDialogflowCxPlaybook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxPlaybook <a name="GoogleDialogflowCxPlaybook" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybook;

GoogleDialogflowCxPlaybook.Builder.create(Construct scope, java.lang.String id)
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
    .goal(java.lang.String)
//  .id(java.lang.String)
//  .instruction(GoogleDialogflowCxPlaybookInstruction)
//  .llmModelSettings(GoogleDialogflowCxPlaybookLlmModelSettings)
//  .parent(java.lang.String)
//  .playbookType(java.lang.String)
//  .referencedTools(java.util.List<java.lang.String>)
//  .timeouts(GoogleDialogflowCxPlaybookTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.goal">goal</a></code> | <code>java.lang.String</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.playbookType">playbookType</a></code> | <code>java.lang.String</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.referencedTools">referencedTools</a></code> | <code>java.util.List<java.lang.String></code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.goal"></a>

- *Type:* java.lang.String

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.instruction"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `playbookType`<sup>Optional</sup> <a name="playbookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.playbookType"></a>

- *Type:* java.lang.String

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `referencedTools`<sup>Optional</sup> <a name="referencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.referencedTools"></a>

- *Type:* java.util.List<java.lang.String>

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction">putInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType">resetPlaybookType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools">resetReferencedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstruction` <a name="putInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction"></a>

```java
public void putInstruction(GoogleDialogflowCxPlaybookInstruction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings"></a>

```java
public void putLlmModelSettings(GoogleDialogflowCxPlaybookLlmModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxPlaybookTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId"></a>

```java
public void resetId()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings"></a>

```java
public void resetLlmModelSettings()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent"></a>

```java
public void resetParent()
```

##### `resetPlaybookType` <a name="resetPlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType"></a>

```java
public void resetPlaybookType()
```

##### `resetReferencedTools` <a name="resetReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools"></a>

```java
public void resetReferencedTools()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybook;

GoogleDialogflowCxPlaybook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybook;

GoogleDialogflowCxPlaybook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybook;

GoogleDialogflowCxPlaybook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybook;

GoogleDialogflowCxPlaybook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxPlaybook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxPlaybook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows">referencedFlows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks">referencedPlaybooks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount">tokenCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput">goalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput">instructionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput">playbookTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput">referencedToolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal">goal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType">playbookType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools">referencedTools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction"></a>

```java
public GoogleDialogflowCxPlaybookInstructionOutputReference getInstruction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings"></a>

```java
public GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `referencedFlows`<sup>Required</sup> <a name="referencedFlows" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows"></a>

```java
public java.util.List<java.lang.String> getReferencedFlows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referencedPlaybooks`<sup>Required</sup> <a name="referencedPlaybooks" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks"></a>

```java
public java.util.List<java.lang.String> getReferencedPlaybooks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts"></a>

```java
public GoogleDialogflowCxPlaybookTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `tokenCount`<sup>Required</sup> <a name="tokenCount" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount"></a>

```java
public java.lang.String getTokenCount();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `goalInput`<sup>Optional</sup> <a name="goalInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput"></a>

```java
public java.lang.String getGoalInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput"></a>

```java
public GoogleDialogflowCxPlaybookInstruction getInstructionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```java
public GoogleDialogflowCxPlaybookLlmModelSettings getLlmModelSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `playbookTypeInput`<sup>Optional</sup> <a name="playbookTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput"></a>

```java
public java.lang.String getPlaybookTypeInput();
```

- *Type:* java.lang.String

---

##### `referencedToolsInput`<sup>Optional</sup> <a name="referencedToolsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput"></a>

```java
public java.util.List<java.lang.String> getReferencedToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal"></a>

```java
public java.lang.String getGoal();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `playbookType`<sup>Required</sup> <a name="playbookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType"></a>

```java
public java.lang.String getPlaybookType();
```

- *Type:* java.lang.String

---

##### `referencedTools`<sup>Required</sup> <a name="referencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools"></a>

```java
public java.util.List<java.lang.String> getReferencedTools();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxPlaybookConfig <a name="GoogleDialogflowCxPlaybookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookConfig;

GoogleDialogflowCxPlaybookConfig.builder()
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
    .goal(java.lang.String)
//  .id(java.lang.String)
//  .instruction(GoogleDialogflowCxPlaybookInstruction)
//  .llmModelSettings(GoogleDialogflowCxPlaybookLlmModelSettings)
//  .parent(java.lang.String)
//  .playbookType(java.lang.String)
//  .referencedTools(java.util.List<java.lang.String>)
//  .timeouts(GoogleDialogflowCxPlaybookTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal">goal</a></code> | <code>java.lang.String</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType">playbookType</a></code> | <code>java.lang.String</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools">referencedTools</a></code> | <code>java.util.List<java.lang.String></code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal"></a>

```java
public java.lang.String getGoal();
```

- *Type:* java.lang.String

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction"></a>

```java
public GoogleDialogflowCxPlaybookInstruction getInstruction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```java
public GoogleDialogflowCxPlaybookLlmModelSettings getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `playbookType`<sup>Optional</sup> <a name="playbookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType"></a>

```java
public java.lang.String getPlaybookType();
```

- *Type:* java.lang.String

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `referencedTools`<sup>Optional</sup> <a name="referencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools"></a>

```java
public java.util.List<java.lang.String> getReferencedTools();
```

- *Type:* java.util.List<java.lang.String>

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxPlaybookTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

### GoogleDialogflowCxPlaybookInstruction <a name="GoogleDialogflowCxPlaybookInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookInstruction;

GoogleDialogflowCxPlaybookInstruction.builder()
//  .guidelines(java.lang.String)
//  .steps(IResolvable)
//  .steps(java.util.List<GoogleDialogflowCxPlaybookInstructionSteps>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines">guidelines</a></code> | <code>java.lang.String</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>></code> | steps block. |

---

##### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines"></a>

```java
public java.lang.String getGuidelines();
```

- *Type:* java.lang.String

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#guidelines GoogleDialogflowCxPlaybook#guidelines}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps"></a>

```java
public java.lang.Object getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

### GoogleDialogflowCxPlaybookInstructionSteps <a name="GoogleDialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookInstructionSteps;

GoogleDialogflowCxPlaybookInstructionSteps.builder()
//  .steps(java.lang.String)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps">steps</a></code> | <code>java.lang.String</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text">text</a></code> | <code>java.lang.String</code> | Step instruction in text format. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps"></a>

```java
public java.lang.String getSteps();
```

- *Type:* java.lang.String

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#text GoogleDialogflowCxPlaybook#text}

---

### GoogleDialogflowCxPlaybookLlmModelSettings <a name="GoogleDialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookLlmModelSettings;

GoogleDialogflowCxPlaybookLlmModelSettings.builder()
//  .model(java.lang.String)
//  .promptText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText">promptText</a></code> | <code>java.lang.String</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#model GoogleDialogflowCxPlaybook#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#prompt_text GoogleDialogflowCxPlaybook#prompt_text}

---

### GoogleDialogflowCxPlaybookTimeouts <a name="GoogleDialogflowCxPlaybookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookTimeouts;

GoogleDialogflowCxPlaybookTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxPlaybookInstructionOutputReference <a name="GoogleDialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookInstructionOutputReference;

new GoogleDialogflowCxPlaybookInstructionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines">resetGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps">resetSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```java
public void putSteps(IResolvable OR java.util.List<GoogleDialogflowCxPlaybookInstructionSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>>

---

##### `resetGuidelines` <a name="resetGuidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```java
public void resetGuidelines()
```

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```java
public void resetSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">guidelinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines">guidelines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```java
public GoogleDialogflowCxPlaybookInstructionStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a>

---

##### `guidelinesInput`<sup>Optional</sup> <a name="guidelinesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```java
public java.lang.String getGuidelinesInput();
```

- *Type:* java.lang.String

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```java
public java.lang.Object getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>>

---

##### `guidelines`<sup>Required</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```java
public java.lang.String getGuidelines();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxPlaybookInstruction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---


### GoogleDialogflowCxPlaybookInstructionStepsList <a name="GoogleDialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookInstructionStepsList;

new GoogleDialogflowCxPlaybookInstructionStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get"></a>

```java
public GoogleDialogflowCxPlaybookInstructionStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>>

---


### GoogleDialogflowCxPlaybookInstructionStepsOutputReference <a name="GoogleDialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference;

new GoogleDialogflowCxPlaybookInstructionStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```java
public void resetSteps()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">stepsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps">steps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```java
public java.lang.String getStepsInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```java
public java.lang.String getSteps();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>

---


### GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference <a name="GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference;

new GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```java
public void resetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```java
public java.lang.String getPromptTextInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxPlaybookLlmModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---


### GoogleDialogflowCxPlaybookTimeoutsOutputReference <a name="GoogleDialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_playbook.GoogleDialogflowCxPlaybookTimeoutsOutputReference;

new GoogleDialogflowCxPlaybookTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---



