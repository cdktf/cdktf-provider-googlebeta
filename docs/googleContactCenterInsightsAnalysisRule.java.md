# `googleContactCenterInsightsAnalysisRule` Submodule <a name="`googleContactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAnalysisRule <a name="GoogleContactCenterInsightsAnalysisRule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRule;

GoogleContactCenterInsightsAnalysisRule.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .analysisPercentage(java.lang.Number)
//  .annotatorSelector(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector)
//  .conversationFilter(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleContactCenterInsightsAnalysisRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage">analysisPercentage</a></code> | <code>java.lang.Number</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#location GoogleContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#active GoogleContactCenterInsightsAnalysisRule#active}

---

##### `analysisPercentage`<sup>Optional</sup> <a name="analysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage"></a>

- *Type:* java.lang.Number

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#analysis_percentage GoogleContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotatorSelector`<sup>Optional</sup> <a name="annotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#annotator_selector GoogleContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter"></a>

- *Type:* java.lang.String

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#conversation_filter GoogleContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#display_name GoogleContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#timeouts GoogleContactCenterInsightsAnalysisRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector">putAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage">resetAnalysisPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector">resetAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnnotatorSelector` <a name="putAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```java
public void putAnnotatorSelector(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleContactCenterInsightsAnalysisRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive"></a>

```java
public void resetActive()
```

##### `resetAnalysisPercentage` <a name="resetAnalysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```java
public void resetAnalysisPercentage()
```

##### `resetAnnotatorSelector` <a name="resetAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```java
public void resetAnnotatorSelector()
```

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```java
public void resetConversationFilter()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRule;

GoogleContactCenterInsightsAnalysisRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRule;

GoogleContactCenterInsightsAnalysisRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRule;

GoogleContactCenterInsightsAnalysisRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRule;

GoogleContactCenterInsightsAnalysisRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContactCenterInsightsAnalysisRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContactCenterInsightsAnalysisRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput">analysisPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">annotatorSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput">conversationFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage">analysisPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `annotatorSelector`<sup>Required</sup> <a name="annotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference getAnnotatorSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `analysisPercentageInput`<sup>Optional</sup> <a name="analysisPercentageInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```java
public java.lang.Number getAnalysisPercentageInput();
```

- *Type:* java.lang.Number

---

##### `annotatorSelectorInput`<sup>Optional</sup> <a name="annotatorSelectorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector getAnnotatorSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```java
public java.lang.String getConversationFilterInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `analysisPercentage`<sup>Required</sup> <a name="analysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```java
public java.lang.Number getAnalysisPercentage();
```

- *Type:* java.lang.Number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```java
public java.lang.String getConversationFilter();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector;

GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.builder()
//  .issueModels(java.util.List<java.lang.String>)
//  .phraseMatchers(java.util.List<java.lang.String>)
//  .qaConfig(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig)
//  .runEntityAnnotator(java.lang.Boolean)
//  .runEntityAnnotator(IResolvable)
//  .runIntentAnnotator(java.lang.Boolean)
//  .runIntentAnnotator(IResolvable)
//  .runInterruptionAnnotator(java.lang.Boolean)
//  .runInterruptionAnnotator(IResolvable)
//  .runIssueModelAnnotator(java.lang.Boolean)
//  .runIssueModelAnnotator(IResolvable)
//  .runPhraseMatcherAnnotator(java.lang.Boolean)
//  .runPhraseMatcherAnnotator(IResolvable)
//  .runQaAnnotator(java.lang.Boolean)
//  .runQaAnnotator(IResolvable)
//  .runSentimentAnnotator(java.lang.Boolean)
//  .runSentimentAnnotator(IResolvable)
//  .runSilenceAnnotator(java.lang.Boolean)
//  .runSilenceAnnotator(IResolvable)
//  .runSummarizationAnnotator(java.lang.Boolean)
//  .runSummarizationAnnotator(IResolvable)
//  .summarizationConfig(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">issueModels</a></code> | <code>java.util.List<java.lang.String></code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">phraseMatchers</a></code> | <code>java.util.List<java.lang.String></code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">runQaAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `issueModels`<sup>Optional</sup> <a name="issueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```java
public java.util.List<java.lang.String> getIssueModels();
```

- *Type:* java.util.List<java.lang.String>

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#issue_models GoogleContactCenterInsightsAnalysisRule#issue_models}

---

##### `phraseMatchers`<sup>Optional</sup> <a name="phraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```java
public java.util.List<java.lang.String> getPhraseMatchers();
```

- *Type:* java.util.List<java.lang.String>

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#phrase_matchers GoogleContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `qaConfig`<sup>Optional</sup> <a name="qaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig getQaConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#qa_config GoogleContactCenterInsightsAnalysisRule#qa_config}

---

##### `runEntityAnnotator`<sup>Optional</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```java
public java.lang.Object getRunEntityAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_entity_annotator GoogleContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `runIntentAnnotator`<sup>Optional</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```java
public java.lang.Object getRunIntentAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_intent_annotator GoogleContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `runInterruptionAnnotator`<sup>Optional</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```java
public java.lang.Object getRunInterruptionAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_interruption_annotator GoogleContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `runIssueModelAnnotator`<sup>Optional</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```java
public java.lang.Object getRunIssueModelAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_issue_model_annotator GoogleContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `runPhraseMatcherAnnotator`<sup>Optional</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```java
public java.lang.Object getRunPhraseMatcherAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_phrase_matcher_annotator GoogleContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `runQaAnnotator`<sup>Optional</sup> <a name="runQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```java
public java.lang.Object getRunQaAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_qa_annotator GoogleContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `runSentimentAnnotator`<sup>Optional</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```java
public java.lang.Object getRunSentimentAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_sentiment_annotator GoogleContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `runSilenceAnnotator`<sup>Optional</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```java
public java.lang.Object getRunSilenceAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_silence_annotator GoogleContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `runSummarizationAnnotator`<sup>Optional</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```java
public java.lang.Object getRunSummarizationAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#run_summarization_annotator GoogleContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `summarizationConfig`<sup>Optional</sup> <a name="summarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig getSummarizationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#summarization_config GoogleContactCenterInsightsAnalysisRule#summarization_config}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;

GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.builder()
//  .scorecardList(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `scorecardList`<sup>Optional</sup> <a name="scorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct getScorecardList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#scorecard_list GoogleContactCenterInsightsAnalysisRule#scorecard_list}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;

GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.builder()
//  .qaScorecardRevisions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>java.util.List<java.lang.String></code> | List of QaScorecardRevisions. |

---

##### `qaScorecardRevisions`<sup>Optional</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```java
public java.util.List<java.lang.String> getQaScorecardRevisions();
```

- *Type:* java.util.List<java.lang.String>

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#qa_scorecard_revisions GoogleContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;

GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.builder()
//  .conversationProfile(java.lang.String)
//  .summarizationModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">conversationProfile</a></code> | <code>java.lang.String</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `conversationProfile`<sup>Optional</sup> <a name="conversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```java
public java.lang.String getConversationProfile();
```

- *Type:* java.lang.String

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#conversation_profile GoogleContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```java
public java.lang.String getSummarizationModel();
```

- *Type:* java.lang.String

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#summarization_model GoogleContactCenterInsightsAnalysisRule#summarization_model}

---

### GoogleContactCenterInsightsAnalysisRuleConfig <a name="GoogleContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleConfig;

GoogleContactCenterInsightsAnalysisRuleConfig.builder()
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
    .location(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .analysisPercentage(java.lang.Number)
//  .annotatorSelector(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector)
//  .conversationFilter(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleContactCenterInsightsAnalysisRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">analysisPercentage</a></code> | <code>java.lang.Number</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#location GoogleContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#active GoogleContactCenterInsightsAnalysisRule#active}

---

##### `analysisPercentage`<sup>Optional</sup> <a name="analysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```java
public java.lang.Number getAnalysisPercentage();
```

- *Type:* java.lang.Number

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#analysis_percentage GoogleContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotatorSelector`<sup>Optional</sup> <a name="annotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector getAnnotatorSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#annotator_selector GoogleContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```java
public java.lang.String getConversationFilter();
```

- *Type:* java.lang.String

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#conversation_filter GoogleContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#display_name GoogleContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#timeouts GoogleContactCenterInsightsAnalysisRule#timeouts}

---

### GoogleContactCenterInsightsAnalysisRuleTimeouts <a name="GoogleContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleTimeouts;

GoogleContactCenterInsightsAnalysisRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">putQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">putSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">resetIssueModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">resetPhraseMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">resetQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">resetRunEntityAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">resetRunIntentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">resetRunInterruptionAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">resetRunIssueModelAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">resetRunPhraseMatcherAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">resetRunQaAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">resetRunSentimentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">resetRunSilenceAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">resetRunSummarizationAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">resetSummarizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQaConfig` <a name="putQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```java
public void putQaConfig(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `putSummarizationConfig` <a name="putSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```java
public void putSummarizationConfig(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `resetIssueModels` <a name="resetIssueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```java
public void resetIssueModels()
```

##### `resetPhraseMatchers` <a name="resetPhraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```java
public void resetPhraseMatchers()
```

##### `resetQaConfig` <a name="resetQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```java
public void resetQaConfig()
```

##### `resetRunEntityAnnotator` <a name="resetRunEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```java
public void resetRunEntityAnnotator()
```

##### `resetRunIntentAnnotator` <a name="resetRunIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```java
public void resetRunIntentAnnotator()
```

##### `resetRunInterruptionAnnotator` <a name="resetRunInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```java
public void resetRunInterruptionAnnotator()
```

##### `resetRunIssueModelAnnotator` <a name="resetRunIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```java
public void resetRunIssueModelAnnotator()
```

##### `resetRunPhraseMatcherAnnotator` <a name="resetRunPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```java
public void resetRunPhraseMatcherAnnotator()
```

##### `resetRunQaAnnotator` <a name="resetRunQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```java
public void resetRunQaAnnotator()
```

##### `resetRunSentimentAnnotator` <a name="resetRunSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```java
public void resetRunSentimentAnnotator()
```

##### `resetRunSilenceAnnotator` <a name="resetRunSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```java
public void resetRunSilenceAnnotator()
```

##### `resetRunSummarizationAnnotator` <a name="resetRunSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```java
public void resetRunSummarizationAnnotator()
```

##### `resetSummarizationConfig` <a name="resetSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```java
public void resetSummarizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">issueModelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">phraseMatchersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">qaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">runEntityAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">runIntentAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">runInterruptionAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">runIssueModelAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">runPhraseMatcherAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">runQaAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">runSentimentAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">runSilenceAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">runSummarizationAnnotatorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">summarizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">issueModels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">phraseMatchers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">runQaAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qaConfig`<sup>Required</sup> <a name="qaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference getQaConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `summarizationConfig`<sup>Required</sup> <a name="summarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference getSummarizationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `issueModelsInput`<sup>Optional</sup> <a name="issueModelsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```java
public java.util.List<java.lang.String> getIssueModelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phraseMatchersInput`<sup>Optional</sup> <a name="phraseMatchersInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```java
public java.util.List<java.lang.String> getPhraseMatchersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `qaConfigInput`<sup>Optional</sup> <a name="qaConfigInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig getQaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `runEntityAnnotatorInput`<sup>Optional</sup> <a name="runEntityAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```java
public java.lang.Object getRunEntityAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runIntentAnnotatorInput`<sup>Optional</sup> <a name="runIntentAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```java
public java.lang.Object getRunIntentAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runInterruptionAnnotatorInput`<sup>Optional</sup> <a name="runInterruptionAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```java
public java.lang.Object getRunInterruptionAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runIssueModelAnnotatorInput`<sup>Optional</sup> <a name="runIssueModelAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```java
public java.lang.Object getRunIssueModelAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runPhraseMatcherAnnotatorInput`<sup>Optional</sup> <a name="runPhraseMatcherAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```java
public java.lang.Object getRunPhraseMatcherAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runQaAnnotatorInput`<sup>Optional</sup> <a name="runQaAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```java
public java.lang.Object getRunQaAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runSentimentAnnotatorInput`<sup>Optional</sup> <a name="runSentimentAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```java
public java.lang.Object getRunSentimentAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runSilenceAnnotatorInput`<sup>Optional</sup> <a name="runSilenceAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```java
public java.lang.Object getRunSilenceAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runSummarizationAnnotatorInput`<sup>Optional</sup> <a name="runSummarizationAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```java
public java.lang.Object getRunSummarizationAnnotatorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `summarizationConfigInput`<sup>Optional</sup> <a name="summarizationConfigInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig getSummarizationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `issueModels`<sup>Required</sup> <a name="issueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```java
public java.util.List<java.lang.String> getIssueModels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phraseMatchers`<sup>Required</sup> <a name="phraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```java
public java.util.List<java.lang.String> getPhraseMatchers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runEntityAnnotator`<sup>Required</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```java
public java.lang.Object getRunEntityAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runIntentAnnotator`<sup>Required</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```java
public java.lang.Object getRunIntentAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runInterruptionAnnotator`<sup>Required</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```java
public java.lang.Object getRunInterruptionAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runIssueModelAnnotator`<sup>Required</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```java
public java.lang.Object getRunIssueModelAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runPhraseMatcherAnnotator`<sup>Required</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```java
public java.lang.Object getRunPhraseMatcherAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runQaAnnotator`<sup>Required</sup> <a name="runQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```java
public java.lang.Object getRunQaAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runSentimentAnnotator`<sup>Required</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```java
public java.lang.Object getRunSentimentAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runSilenceAnnotator`<sup>Required</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```java
public java.lang.Object getRunSilenceAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runSummarizationAnnotator`<sup>Required</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```java
public java.lang.Object getRunSummarizationAnnotator();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">putScorecardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">resetScorecardList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScorecardList` <a name="putScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```java
public void putScorecardList(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `resetScorecardList` <a name="resetScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```java
public void resetScorecardList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">scorecardListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scorecardList`<sup>Required</sup> <a name="scorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference getScorecardList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `scorecardListInput`<sup>Optional</sup> <a name="scorecardListInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct getScorecardListInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">resetQaScorecardRevisions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQaScorecardRevisions` <a name="resetQaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```java
public void resetQaScorecardRevisions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">qaScorecardRevisionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qaScorecardRevisionsInput`<sup>Optional</sup> <a name="qaScorecardRevisionsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```java
public java.util.List<java.lang.String> getQaScorecardRevisionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `qaScorecardRevisions`<sup>Required</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```java
public java.util.List<java.lang.String> getQaScorecardRevisions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">resetConversationProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">resetSummarizationModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationProfile` <a name="resetConversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```java
public void resetConversationProfile()
```

##### `resetSummarizationModel` <a name="resetSummarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```java
public void resetSummarizationModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">conversationProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">summarizationModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">conversationProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationProfileInput`<sup>Optional</sup> <a name="conversationProfileInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```java
public java.lang.String getConversationProfileInput();
```

- *Type:* java.lang.String

---

##### `summarizationModelInput`<sup>Optional</sup> <a name="summarizationModelInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```java
public java.lang.String getSummarizationModelInput();
```

- *Type:* java.lang.String

---

##### `conversationProfile`<sup>Required</sup> <a name="conversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```java
public java.lang.String getConversationProfile();
```

- *Type:* java.lang.String

---

##### `summarizationModel`<sup>Required</sup> <a name="summarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```java
public java.lang.String getSummarizationModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_contact_center_insights_analysis_rule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference;

new GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---



