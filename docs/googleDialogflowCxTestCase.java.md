# `googleDialogflowCxTestCase` Submodule <a name="`googleDialogflowCxTestCase` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxTestCase <a name="GoogleDialogflowCxTestCase" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case google_dialogflow_cx_test_case}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCase;

GoogleDialogflowCxTestCase.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .notes(java.lang.String)
//  .parent(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .testCaseConversationTurns(IResolvable)
//  .testCaseConversationTurns(java.util.List<GoogleDialogflowCxTestCaseTestCaseConversationTurns>)
//  .testConfig(GoogleDialogflowCxTestCaseTestConfig)
//  .timeouts(GoogleDialogflowCxTestCaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>></code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#display_name GoogleDialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#notes GoogleDialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#parent GoogleDialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#tags GoogleDialogflowCxTestCase#tags}

---

##### `testCaseConversationTurns`<sup>Optional</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testCaseConversationTurns"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>>

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#test_case_conversation_turns GoogleDialogflowCxTestCase#test_case_conversation_turns}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#test_config GoogleDialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#timeouts GoogleDialogflowCxTestCase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestCaseConversationTurns">putTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig">putTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestCaseConversationTurns">resetTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestConfig">resetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTestCaseConversationTurns` <a name="putTestCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestCaseConversationTurns"></a>

```java
public void putTestCaseConversationTurns(IResolvable OR java.util.List<GoogleDialogflowCxTestCaseTestCaseConversationTurns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestCaseConversationTurns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>>

---

##### `putTestConfig` <a name="putTestConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig"></a>

```java
public void putTestConfig(GoogleDialogflowCxTestCaseTestConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxTestCaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetId"></a>

```java
public void resetId()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetParent"></a>

```java
public void resetParent()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTags"></a>

```java
public void resetTags()
```

##### `resetTestCaseConversationTurns` <a name="resetTestCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestCaseConversationTurns"></a>

```java
public void resetTestCaseConversationTurns()
```

##### `resetTestConfig` <a name="resetTestConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestConfig"></a>

```java
public void resetTestConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxTestCase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCase;

GoogleDialogflowCxTestCase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCase;

GoogleDialogflowCxTestCase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCase;

GoogleDialogflowCxTestCase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCase;

GoogleDialogflowCxTestCase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxTestCase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxTestCase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lastTestResult">lastTestResult</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList">GoogleDialogflowCxTestCaseLastTestResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference">GoogleDialogflowCxTestCaseTestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference">GoogleDialogflowCxTestCaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurnsInput">testCaseConversationTurnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfigInput">testConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `lastTestResult`<sup>Required</sup> <a name="lastTestResult" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lastTestResult"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultList getLastTestResult();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList">GoogleDialogflowCxTestCaseLastTestResultList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `testCaseConversationTurns`<sup>Required</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurns"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsList getTestCaseConversationTurns();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsList</a>

---

##### `testConfig`<sup>Required</sup> <a name="testConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfig"></a>

```java
public GoogleDialogflowCxTestCaseTestConfigOutputReference getTestConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference">GoogleDialogflowCxTestCaseTestConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeouts"></a>

```java
public GoogleDialogflowCxTestCaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference">GoogleDialogflowCxTestCaseTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `testCaseConversationTurnsInput`<sup>Optional</sup> <a name="testCaseConversationTurnsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurnsInput"></a>

```java
public java.lang.Object getTestCaseConversationTurnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>>

---

##### `testConfigInput`<sup>Optional</sup> <a name="testConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfigInput"></a>

```java
public GoogleDialogflowCxTestCaseTestConfig getTestConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxTestCaseConfig <a name="GoogleDialogflowCxTestCaseConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseConfig;

GoogleDialogflowCxTestCaseConfig.builder()
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
//  .id(java.lang.String)
//  .notes(java.lang.String)
//  .parent(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .testCaseConversationTurns(IResolvable)
//  .testCaseConversationTurns(java.util.List<GoogleDialogflowCxTestCaseTestCaseConversationTurns>)
//  .testConfig(GoogleDialogflowCxTestCaseTestConfig)
//  .timeouts(GoogleDialogflowCxTestCaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>></code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#display_name GoogleDialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#notes GoogleDialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#parent GoogleDialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#tags GoogleDialogflowCxTestCase#tags}

---

##### `testCaseConversationTurns`<sup>Optional</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testCaseConversationTurns"></a>

```java
public java.lang.Object getTestCaseConversationTurns();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>>

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#test_case_conversation_turns GoogleDialogflowCxTestCase#test_case_conversation_turns}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testConfig"></a>

```java
public GoogleDialogflowCxTestCaseTestConfig getTestConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#test_config GoogleDialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxTestCaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#timeouts GoogleDialogflowCxTestCase#timeouts}

---

### GoogleDialogflowCxTestCaseLastTestResult <a name="GoogleDialogflowCxTestCaseLastTestResult" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResult;

GoogleDialogflowCxTestCaseLastTestResult.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurns <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurns;

GoogleDialogflowCxTestCaseLastTestResultConversationTurns.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.builder()
    .build();
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent;

GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.builder()
    .build();
```


### GoogleDialogflowCxTestCaseTestCaseConversationTurns <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurns;

GoogleDialogflowCxTestCaseTestCaseConversationTurns.builder()
//  .userInput(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput)
//  .virtualAgentOutput(GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | user_input block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | virtual_agent_output block. |

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.userInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput getUserInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#user_input GoogleDialogflowCxTestCase#user_input}

---

##### `virtualAgentOutput`<sup>Optional</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput getVirtualAgentOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

virtual_agent_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#virtual_agent_output GoogleDialogflowCxTestCase#virtual_agent_output}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.builder()
//  .enableSentimentAnalysis(java.lang.Boolean)
//  .enableSentimentAnalysis(IResolvable)
//  .injectedParameters(java.lang.String)
//  .input(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput)
//  .isWebhookEnabled(java.lang.Boolean)
//  .isWebhookEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether sentiment analysis is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters">injectedParameters</a></code> | <code>java.lang.String</code> | Parameters that need to be injected into the conversation during intent detection. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input">input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If webhooks should be allowed to trigger in response to the user utterance. |

---

##### `enableSentimentAnalysis`<sup>Optional</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis"></a>

```java
public java.lang.Object getEnableSentimentAnalysis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether sentiment analysis is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#enable_sentiment_analysis GoogleDialogflowCxTestCase#enable_sentiment_analysis}

---

##### `injectedParameters`<sup>Optional</sup> <a name="injectedParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters"></a>

```java
public java.lang.String getInjectedParameters();
```

- *Type:* java.lang.String

Parameters that need to be injected into the conversation during intent detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#injected_parameters GoogleDialogflowCxTestCase#injected_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput getInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#input GoogleDialogflowCxTestCase#input}

---

##### `isWebhookEnabled`<sup>Optional</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled"></a>

```java
public java.lang.Object getIsWebhookEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If webhooks should be allowed to trigger in response to the user utterance.

Often if parameters are injected, webhooks should not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#is_webhook_enabled GoogleDialogflowCxTestCase#is_webhook_enabled}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.builder()
//  .dtmf(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf)
//  .event(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent)
//  .languageCode(java.lang.String)
//  .text(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | dtmf block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event">event</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | event block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the input. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | text block. |

---

##### `dtmf`<sup>Optional</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf getDtmf();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

dtmf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#dtmf GoogleDialogflowCxTestCase#dtmf}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent getEvent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#event GoogleDialogflowCxTestCase#event}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language of the input.

See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#language_code GoogleDialogflowCxTestCase#language_code}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText getText();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.builder()
//  .digits(java.lang.String)
//  .finishDigit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits">digits</a></code> | <code>java.lang.String</code> | The dtmf digits. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit">finishDigit</a></code> | <code>java.lang.String</code> | The finish digit (if any). |

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits"></a>

```java
public java.lang.String getDigits();
```

- *Type:* java.lang.String

The dtmf digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#digits GoogleDialogflowCxTestCase#digits}

---

##### `finishDigit`<sup>Optional</sup> <a name="finishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit"></a>

```java
public java.lang.String getFinishDigit();
```

- *Type:* java.lang.String

The finish digit (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#finish_digit GoogleDialogflowCxTestCase#finish_digit}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.builder()
    .event(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event">event</a></code> | <code>java.lang.String</code> | Name of the event. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

Name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#event GoogleDialogflowCxTestCase#event}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.builder()
    .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text">text</a></code> | <code>java.lang.String</code> | The natural language text to be processed. Text length must not exceed 256 characters. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The natural language text to be processed. Text length must not exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.builder()
//  .currentPage(GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage)
//  .sessionParameters(java.lang.String)
//  .textResponses(IResolvable)
//  .textResponses(java.util.List<GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses>)
//  .triggeredIntent(GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | current_page block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters">sessionParameters</a></code> | <code>java.lang.String</code> | The session parameters available to the bot at this point. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses">textResponses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>></code> | text_responses block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | triggered_intent block. |

---

##### `currentPage`<sup>Optional</sup> <a name="currentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage getCurrentPage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

current_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#current_page GoogleDialogflowCxTestCase#current_page}

---

##### `sessionParameters`<sup>Optional</sup> <a name="sessionParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters"></a>

```java
public java.lang.String getSessionParameters();
```

- *Type:* java.lang.String

The session parameters available to the bot at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#session_parameters GoogleDialogflowCxTestCase#session_parameters}

---

##### `textResponses`<sup>Optional</sup> <a name="textResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses"></a>

```java
public java.lang.Object getTextResponses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

text_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#text_responses GoogleDialogflowCxTestCase#text_responses}

---

##### `triggeredIntent`<sup>Optional</sup> <a name="triggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent getTriggeredIntent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

triggered_intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#triggered_intent GoogleDialogflowCxTestCase#triggered_intent}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#name GoogleDialogflowCxTestCase#name}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.builder()
//  .text(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text">text</a></code> | <code>java.util.List<java.lang.String></code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text"></a>

```java
public java.util.List<java.lang.String> getText();
```

- *Type:* java.util.List<java.lang.String>

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;

GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#name GoogleDialogflowCxTestCase#name}

---

### GoogleDialogflowCxTestCaseTestConfig <a name="GoogleDialogflowCxTestCaseTestConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestConfig;

GoogleDialogflowCxTestCaseTestConfig.builder()
//  .flow(java.lang.String)
//  .page(java.lang.String)
//  .trackingParameters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.flow">flow</a></code> | <code>java.lang.String</code> | Flow name to start the test case with. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.page">page</a></code> | <code>java.lang.String</code> | The page to start the test case with. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.trackingParameters">trackingParameters</a></code> | <code>java.util.List<java.lang.String></code> | Session parameters to be compared when calculating differences. |

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.flow"></a>

```java
public java.lang.String getFlow();
```

- *Type:* java.lang.String

Flow name to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#flow GoogleDialogflowCxTestCase#flow}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

The page to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#page GoogleDialogflowCxTestCase#page}

---

##### `trackingParameters`<sup>Optional</sup> <a name="trackingParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.trackingParameters"></a>

```java
public java.util.List<java.lang.String> getTrackingParameters();
```

- *Type:* java.util.List<java.lang.String>

Session parameters to be compared when calculating differences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#tracking_parameters GoogleDialogflowCxTestCase#tracking_parameters}

---

### GoogleDialogflowCxTestCaseTimeouts <a name="GoogleDialogflowCxTestCaseTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTimeouts;

GoogleDialogflowCxTestCaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#create GoogleDialogflowCxTestCase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#delete GoogleDialogflowCxTestCase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#update GoogleDialogflowCxTestCase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#create GoogleDialogflowCxTestCase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#delete GoogleDialogflowCxTestCase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_test_case#update GoogleDialogflowCxTestCase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns">GoogleDialogflowCxTestCaseLastTestResultConversationTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList getUserInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a>

---

##### `virtualAgentOutput`<sup>Required</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList getVirtualAgentOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns">GoogleDialogflowCxTestCaseLastTestResultConversationTurns</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finishDigit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```java
public java.lang.String getDigits();
```

- *Type:* java.lang.String

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```java
public java.lang.String getFinishDigit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList getDtmf();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList getEvent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList getText();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters">injectedParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableSentimentAnalysis`<sup>Required</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```java
public IResolvable getEnableSentimentAnalysis();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `injectedParameters`<sup>Required</sup> <a name="injectedParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```java
public java.lang.String getInjectedParameters();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a>

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```java
public IResolvable getIsWebhookEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences">differences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">sessionParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">textResponses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentPage`<sup>Required</sup> <a name="currentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList getCurrentPage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a>

---

##### `differences`<sup>Required</sup> <a name="differences" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList getDifferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a>

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```java
public java.lang.String getSessionParameters();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a>

---

##### `textResponses`<sup>Required</sup> <a name="textResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList getTextResponses();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggeredIntent`<sup>Required</sup> <a name="triggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList getTriggeredIntent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```java
public java.util.List<java.lang.String> getText();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### GoogleDialogflowCxTestCaseLastTestResultList <a name="GoogleDialogflowCxTestCaseLastTestResultList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultList;

new GoogleDialogflowCxTestCaseLastTestResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.get"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowCxTestCaseLastTestResultOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseLastTestResultOutputReference;

new GoogleDialogflowCxTestCaseLastTestResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns">conversationTurns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testResult">testResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testTime">testTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult">GoogleDialogflowCxTestCaseLastTestResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationTurns`<sup>Required</sup> <a name="conversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList getConversationTurns();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `testResult`<sup>Required</sup> <a name="testResult" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testResult"></a>

```java
public java.lang.String getTestResult();
```

- *Type:* java.lang.String

---

##### `testTime`<sup>Required</sup> <a name="testTime" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testTime"></a>

```java
public java.lang.String getTestTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseLastTestResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult">GoogleDialogflowCxTestCaseLastTestResult</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsList <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.get"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput">putUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput">putVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput">resetUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput">resetVirtualAgentOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserInput` <a name="putUserInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput"></a>

```java
public void putUserInput(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `putVirtualAgentOutput` <a name="putVirtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput"></a>

```java
public void putVirtualAgentOutput(GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `resetUserInput` <a name="resetUserInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput"></a>

```java
public void resetUserInput()
```

##### `resetVirtualAgentOutput` <a name="resetVirtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput"></a>

```java
public void resetVirtualAgentOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput">userInputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput">virtualAgentOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference getUserInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a>

---

##### `virtualAgentOutput`<sup>Required</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference getVirtualAgentOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a>

---

##### `userInputInput`<sup>Optional</sup> <a name="userInputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput getUserInputInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `virtualAgentOutputInput`<sup>Optional</sup> <a name="virtualAgentOutputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput getVirtualAgentOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits">resetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit">resetFinishDigit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDigits` <a name="resetDigits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits"></a>

```java
public void resetDigits()
```

##### `resetFinishDigit` <a name="resetFinishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit"></a>

```java
public void resetFinishDigit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput">digitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput">finishDigitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finishDigit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput"></a>

```java
public java.lang.String getDigitsInput();
```

- *Type:* java.lang.String

---

##### `finishDigitInput`<sup>Optional</sup> <a name="finishDigitInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput"></a>

```java
public java.lang.String getFinishDigitInput();
```

- *Type:* java.lang.String

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```java
public java.lang.String getDigits();
```

- *Type:* java.lang.String

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```java
public java.lang.String getFinishDigit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput">eventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput"></a>

```java
public java.lang.String getEventInput();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf">putDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf">resetDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDtmf` <a name="putDtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf"></a>

```java
public void putDtmf(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `putEvent` <a name="putEvent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent"></a>

```java
public void putEvent(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText"></a>

```java
public void putText(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `resetDtmf` <a name="resetDtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf"></a>

```java
public void resetDtmf()
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent"></a>

```java
public void resetEvent()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput">dtmfInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput">eventInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference getDtmf();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference getEvent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference getText();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a>

---

##### `dtmfInput`<sup>Optional</sup> <a name="dtmfInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf getDtmfInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent getEventInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText getTextInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis">resetEnableSentimentAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters">resetInjectedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled">resetIsWebhookEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput"></a>

```java
public void putInput(GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `resetEnableSentimentAnalysis` <a name="resetEnableSentimentAnalysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis"></a>

```java
public void resetEnableSentimentAnalysis()
```

##### `resetInjectedParameters` <a name="resetInjectedParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters"></a>

```java
public void resetInjectedParameters()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput"></a>

```java
public void resetInput()
```

##### `resetIsWebhookEnabled` <a name="resetIsWebhookEnabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled"></a>

```java
public void resetIsWebhookEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput">enableSentimentAnalysisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput">injectedParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput">inputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput">isWebhookEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters">injectedParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference getInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a>

---

##### `enableSentimentAnalysisInput`<sup>Optional</sup> <a name="enableSentimentAnalysisInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput"></a>

```java
public java.lang.Object getEnableSentimentAnalysisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `injectedParametersInput`<sup>Optional</sup> <a name="injectedParametersInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput"></a>

```java
public java.lang.String getInjectedParametersInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput getInputInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `isWebhookEnabledInput`<sup>Optional</sup> <a name="isWebhookEnabledInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput"></a>

```java
public java.lang.Object getIsWebhookEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSentimentAnalysis`<sup>Required</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```java
public java.lang.Object getEnableSentimentAnalysis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `injectedParameters`<sup>Required</sup> <a name="injectedParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```java
public java.lang.String getInjectedParameters();
```

- *Type:* java.lang.String

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```java
public java.lang.Object getIsWebhookEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage">putCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses">putTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent">putTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage">resetCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters">resetSessionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses">resetTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent">resetTriggeredIntent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentPage` <a name="putCurrentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage"></a>

```java
public void putCurrentPage(GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `putTextResponses` <a name="putTextResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses"></a>

```java
public void putTextResponses(IResolvable OR java.util.List<GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

---

##### `putTriggeredIntent` <a name="putTriggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent"></a>

```java
public void putTriggeredIntent(GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `resetCurrentPage` <a name="resetCurrentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage"></a>

```java
public void resetCurrentPage()
```

##### `resetSessionParameters` <a name="resetSessionParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters"></a>

```java
public void resetSessionParameters()
```

##### `resetTextResponses` <a name="resetTextResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses"></a>

```java
public void resetTextResponses()
```

##### `resetTriggeredIntent` <a name="resetTriggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent"></a>

```java
public void resetTriggeredIntent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">textResponses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput">currentPageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput">sessionParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput">textResponsesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput">triggeredIntentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">sessionParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentPage`<sup>Required</sup> <a name="currentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference getCurrentPage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a>

---

##### `textResponses`<sup>Required</sup> <a name="textResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList getTextResponses();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggeredIntent`<sup>Required</sup> <a name="triggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference getTriggeredIntent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a>

---

##### `currentPageInput`<sup>Optional</sup> <a name="currentPageInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage getCurrentPageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `sessionParametersInput`<sup>Optional</sup> <a name="sessionParametersInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput"></a>

```java
public java.lang.String getSessionParametersInput();
```

- *Type:* java.lang.String

---

##### `textResponsesInput`<sup>Optional</sup> <a name="textResponsesInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput"></a>

```java
public java.lang.Object getTextResponsesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

---

##### `triggeredIntentInput`<sup>Optional</sup> <a name="triggeredIntentInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent getTriggeredIntentInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```java
public java.lang.String getSessionParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput">textInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput"></a>

```java
public java.util.List<java.lang.String> getTextInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```java
public java.util.List<java.lang.String> getText();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference;

new GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### GoogleDialogflowCxTestCaseTestConfigOutputReference <a name="GoogleDialogflowCxTestCaseTestConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTestConfigOutputReference;

new GoogleDialogflowCxTestCaseTestConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetFlow">resetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters">resetTrackingParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlow` <a name="resetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetFlow"></a>

```java
public void resetFlow()
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetPage"></a>

```java
public void resetPage()
```

##### `resetTrackingParameters` <a name="resetTrackingParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters"></a>

```java
public void resetTrackingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flowInput">flowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.pageInput">pageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput">trackingParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flow">flow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.page">page</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters">trackingParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowInput`<sup>Optional</sup> <a name="flowInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flowInput"></a>

```java
public java.lang.String getFlowInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.pageInput"></a>

```java
public java.lang.String getPageInput();
```

- *Type:* java.lang.String

---

##### `trackingParametersInput`<sup>Optional</sup> <a name="trackingParametersInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput"></a>

```java
public java.util.List<java.lang.String> getTrackingParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flow"></a>

```java
public java.lang.String getFlow();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

---

##### `trackingParameters`<sup>Required</sup> <a name="trackingParameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters"></a>

```java
public java.util.List<java.lang.String> getTrackingParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxTestCaseTestConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

---


### GoogleDialogflowCxTestCaseTimeoutsOutputReference <a name="GoogleDialogflowCxTestCaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_test_case.GoogleDialogflowCxTestCaseTimeoutsOutputReference;

new GoogleDialogflowCxTestCaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

---



