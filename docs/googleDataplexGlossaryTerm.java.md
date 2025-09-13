# `googleDataplexGlossaryTerm` Submodule <a name="`googleDataplexGlossaryTerm` Submodule" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexGlossaryTerm <a name="GoogleDataplexGlossaryTerm" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term google_dataplex_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTerm;

GoogleDataplexGlossaryTerm.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .termId(java.lang.String)
//  .timeouts(GoogleDataplexGlossaryTermTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary term should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryTerm in the resource-hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.termId">termId</a></code> | <code>java.lang.String</code> | The term id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the glossary term should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#location GoogleDataplexGlossaryTerm#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The immediate parent of the GlossaryTerm in the resource-hierarchy.

It can either be a Glossary or a Term. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/terms/{termId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#parent GoogleDataplexGlossaryTerm#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The user-mutable description of the GlossaryTerm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#description GoogleDataplexGlossaryTerm#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User friendly display name of the GlossaryTerm.

This is user-mutable. This will be same as the termId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#display_name GoogleDataplexGlossaryTerm#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.glossaryId"></a>

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#glossary_id GoogleDataplexGlossaryTerm#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryTerm.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#labels GoogleDataplexGlossaryTerm#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}.

---

##### `termId`<sup>Optional</sup> <a name="termId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.termId"></a>

- *Type:* java.lang.String

The term id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#term_id GoogleDataplexGlossaryTerm#term_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#timeouts GoogleDataplexGlossaryTerm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetGlossaryId">resetGlossaryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTermId">resetTermId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexGlossaryTermTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGlossaryId` <a name="resetGlossaryId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetGlossaryId"></a>

```java
public void resetGlossaryId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetProject"></a>

```java
public void resetProject()
```

##### `resetTermId` <a name="resetTermId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTermId"></a>

```java
public void resetTermId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexGlossaryTerm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTerm;

GoogleDataplexGlossaryTerm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTerm;

GoogleDataplexGlossaryTerm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTerm;

GoogleDataplexGlossaryTerm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTerm;

GoogleDataplexGlossaryTerm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexGlossaryTerm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataplexGlossaryTerm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexGlossaryTerm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference">GoogleDataplexGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryIdInput">glossaryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termIdInput">termIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termId">termId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeouts"></a>

```java
public GoogleDataplexGlossaryTermTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference">GoogleDataplexGlossaryTermTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `glossaryIdInput`<sup>Optional</sup> <a name="glossaryIdInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryIdInput"></a>

```java
public java.lang.String getGlossaryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `termIdInput`<sup>Optional</sup> <a name="termIdInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termIdInput"></a>

```java
public java.lang.String getTermIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `termId`<sup>Required</sup> <a name="termId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termId"></a>

```java
public java.lang.String getTermId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexGlossaryTermConfig <a name="GoogleDataplexGlossaryTermConfig" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTermConfig;

GoogleDataplexGlossaryTermConfig.builder()
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
    .parent(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .termId(java.lang.String)
//  .timeouts(GoogleDataplexGlossaryTermTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary term should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryTerm in the resource-hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.termId">termId</a></code> | <code>java.lang.String</code> | The term id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the glossary term should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#location GoogleDataplexGlossaryTerm#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The immediate parent of the GlossaryTerm in the resource-hierarchy.

It can either be a Glossary or a Term. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/terms/{termId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#parent GoogleDataplexGlossaryTerm#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The user-mutable description of the GlossaryTerm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#description GoogleDataplexGlossaryTerm#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User friendly display name of the GlossaryTerm.

This is user-mutable. This will be same as the termId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#display_name GoogleDataplexGlossaryTerm#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#glossary_id GoogleDataplexGlossaryTerm#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryTerm.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#labels GoogleDataplexGlossaryTerm#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}.

---

##### `termId`<sup>Optional</sup> <a name="termId" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.termId"></a>

```java
public java.lang.String getTermId();
```

- *Type:* java.lang.String

The term id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#term_id GoogleDataplexGlossaryTerm#term_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.timeouts"></a>

```java
public GoogleDataplexGlossaryTermTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#timeouts GoogleDataplexGlossaryTerm#timeouts}

---

### GoogleDataplexGlossaryTermTimeouts <a name="GoogleDataplexGlossaryTermTimeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTermTimeouts;

GoogleDataplexGlossaryTermTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#create GoogleDataplexGlossaryTerm#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#delete GoogleDataplexGlossaryTerm#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#update GoogleDataplexGlossaryTerm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#create GoogleDataplexGlossaryTerm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#delete GoogleDataplexGlossaryTerm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_glossary_term#update GoogleDataplexGlossaryTerm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexGlossaryTermTimeoutsOutputReference <a name="GoogleDataplexGlossaryTermTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_glossary_term.GoogleDataplexGlossaryTermTimeoutsOutputReference;

new GoogleDataplexGlossaryTermTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

---



