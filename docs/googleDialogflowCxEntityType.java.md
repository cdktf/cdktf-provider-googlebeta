# `googleDialogflowCxEntityType` Submodule <a name="`googleDialogflowCxEntityType` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxEntityType <a name="GoogleDialogflowCxEntityType" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type google_dialogflow_cx_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityType;

GoogleDialogflowCxEntityType.Builder.create(Construct scope, java.lang.String id)
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
    .entities(IResolvable)
    .entities(java.util.List<GoogleDialogflowCxEntityTypeEntities>)
    .kind(java.lang.String)
//  .autoExpansionMode(java.lang.String)
//  .enableFuzzyExtraction(java.lang.Boolean)
//  .enableFuzzyExtraction(IResolvable)
//  .excludedPhrases(IResolvable)
//  .excludedPhrases(java.util.List<GoogleDialogflowCxEntityTypeExcludedPhrases>)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .parent(java.lang.String)
//  .redact(java.lang.Boolean)
//  .redact(IResolvable)
//  .timeouts(GoogleDialogflowCxEntityTypeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.entities">entities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>></code> | entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.autoExpansionMode">autoExpansionMode</a></code> | <code>java.lang.String</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.excludedPhrases">excludedPhrases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>></code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.redact">redact</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#display_name GoogleDialogflowCxEntityType#display_name}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.entities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#entities GoogleDialogflowCxEntityType#entities}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Indicates whether the entity type can be automatically expanded.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#kind GoogleDialogflowCxEntityType#kind}

---

##### `autoExpansionMode`<sup>Optional</sup> <a name="autoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.autoExpansionMode"></a>

- *Type:* java.lang.String

Represents kinds of entities.

* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#auto_expansion_mode GoogleDialogflowCxEntityType#auto_expansion_mode}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.enableFuzzyExtraction"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#enable_fuzzy_extraction GoogleDialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `excludedPhrases`<sup>Optional</sup> <a name="excludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.excludedPhrases"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>>

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#excluded_phrases GoogleDialogflowCxEntityType#excluded_phrases}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#language_code GoogleDialogflowCxEntityType#language_code}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#parent GoogleDialogflowCxEntityType#parent}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.redact"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#redact GoogleDialogflowCxEntityType#redact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#timeouts GoogleDialogflowCxEntityType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases">putExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetAutoExpansionMode">resetAutoExpansionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetEnableFuzzyExtraction">resetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetExcludedPhrases">resetExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetRedact">resetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntities` <a name="putEntities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities"></a>

```java
public void putEntities(IResolvable OR java.util.List<GoogleDialogflowCxEntityTypeEntities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>>

---

##### `putExcludedPhrases` <a name="putExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases"></a>

```java
public void putExcludedPhrases(IResolvable OR java.util.List<GoogleDialogflowCxEntityTypeExcludedPhrases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxEntityTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---

##### `resetAutoExpansionMode` <a name="resetAutoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetAutoExpansionMode"></a>

```java
public void resetAutoExpansionMode()
```

##### `resetEnableFuzzyExtraction` <a name="resetEnableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetEnableFuzzyExtraction"></a>

```java
public void resetEnableFuzzyExtraction()
```

##### `resetExcludedPhrases` <a name="resetExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetExcludedPhrases"></a>

```java
public void resetExcludedPhrases()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetId"></a>

```java
public void resetId()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetParent"></a>

```java
public void resetParent()
```

##### `resetRedact` <a name="resetRedact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetRedact"></a>

```java
public void resetRedact()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxEntityType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityType;

GoogleDialogflowCxEntityType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityType;

GoogleDialogflowCxEntityType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityType;

GoogleDialogflowCxEntityType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityType;

GoogleDialogflowCxEntityType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxEntityType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxEntityType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxEntityType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxEntityType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxEntityType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entities">entities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList">GoogleDialogflowCxEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrases">excludedPhrases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList">GoogleDialogflowCxEntityTypeExcludedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference">GoogleDialogflowCxEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionModeInput">autoExpansionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtractionInput">enableFuzzyExtractionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entitiesInput">entitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrasesInput">excludedPhrasesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redactInput">redactInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionMode">autoExpansionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redact">redact</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entities"></a>

```java
public GoogleDialogflowCxEntityTypeEntitiesList getEntities();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList">GoogleDialogflowCxEntityTypeEntitiesList</a>

---

##### `excludedPhrases`<sup>Required</sup> <a name="excludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrases"></a>

```java
public GoogleDialogflowCxEntityTypeExcludedPhrasesList getExcludedPhrases();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList">GoogleDialogflowCxEntityTypeExcludedPhrasesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeouts"></a>

```java
public GoogleDialogflowCxEntityTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference">GoogleDialogflowCxEntityTypeTimeoutsOutputReference</a>

---

##### `autoExpansionModeInput`<sup>Optional</sup> <a name="autoExpansionModeInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionModeInput"></a>

```java
public java.lang.String getAutoExpansionModeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableFuzzyExtractionInput`<sup>Optional</sup> <a name="enableFuzzyExtractionInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtractionInput"></a>

```java
public java.lang.Object getEnableFuzzyExtractionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entitiesInput"></a>

```java
public java.lang.Object getEntitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>>

---

##### `excludedPhrasesInput`<sup>Optional</sup> <a name="excludedPhrasesInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrasesInput"></a>

```java
public java.lang.Object getExcludedPhrasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `redactInput`<sup>Optional</sup> <a name="redactInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redactInput"></a>

```java
public java.lang.Object getRedactInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---

##### `autoExpansionMode`<sup>Required</sup> <a name="autoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionMode"></a>

```java
public java.lang.String getAutoExpansionMode();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableFuzzyExtraction`<sup>Required</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtraction"></a>

```java
public java.lang.Object getEnableFuzzyExtraction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `redact`<sup>Required</sup> <a name="redact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redact"></a>

```java
public java.lang.Object getRedact();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxEntityTypeConfig <a name="GoogleDialogflowCxEntityTypeConfig" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeConfig;

GoogleDialogflowCxEntityTypeConfig.builder()
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
    .entities(IResolvable)
    .entities(java.util.List<GoogleDialogflowCxEntityTypeEntities>)
    .kind(java.lang.String)
//  .autoExpansionMode(java.lang.String)
//  .enableFuzzyExtraction(java.lang.Boolean)
//  .enableFuzzyExtraction(IResolvable)
//  .excludedPhrases(IResolvable)
//  .excludedPhrases(java.util.List<GoogleDialogflowCxEntityTypeExcludedPhrases>)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .parent(java.lang.String)
//  .redact(java.lang.Boolean)
//  .redact(IResolvable)
//  .timeouts(GoogleDialogflowCxEntityTypeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.entities">entities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>></code> | entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.autoExpansionMode">autoExpansionMode</a></code> | <code>java.lang.String</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.excludedPhrases">excludedPhrases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>></code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.redact">redact</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#display_name GoogleDialogflowCxEntityType#display_name}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.entities"></a>

```java
public java.lang.Object getEntities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#entities GoogleDialogflowCxEntityType#entities}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Indicates whether the entity type can be automatically expanded.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#kind GoogleDialogflowCxEntityType#kind}

---

##### `autoExpansionMode`<sup>Optional</sup> <a name="autoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.autoExpansionMode"></a>

```java
public java.lang.String getAutoExpansionMode();
```

- *Type:* java.lang.String

Represents kinds of entities.

* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#auto_expansion_mode GoogleDialogflowCxEntityType#auto_expansion_mode}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.enableFuzzyExtraction"></a>

```java
public java.lang.Object getEnableFuzzyExtraction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#enable_fuzzy_extraction GoogleDialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `excludedPhrases`<sup>Optional</sup> <a name="excludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.excludedPhrases"></a>

```java
public java.lang.Object getExcludedPhrases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>>

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#excluded_phrases GoogleDialogflowCxEntityType#excluded_phrases}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#language_code GoogleDialogflowCxEntityType#language_code}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#parent GoogleDialogflowCxEntityType#parent}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.redact"></a>

```java
public java.lang.Object getRedact();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#redact GoogleDialogflowCxEntityType#redact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxEntityTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#timeouts GoogleDialogflowCxEntityType#timeouts}

---

### GoogleDialogflowCxEntityTypeEntities <a name="GoogleDialogflowCxEntityTypeEntities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeEntities;

GoogleDialogflowCxEntityTypeEntities.builder()
//  .synonyms(java.util.List<java.lang.String>)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.value">value</a></code> | <code>java.lang.String</code> | The primary value associated with this entity entry. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#synonyms GoogleDialogflowCxEntityType#synonyms}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}

---

### GoogleDialogflowCxEntityTypeExcludedPhrases <a name="GoogleDialogflowCxEntityTypeExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeExcludedPhrases;

GoogleDialogflowCxEntityTypeExcludedPhrases.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.property.value">value</a></code> | <code>java.lang.String</code> | The word or phrase to be excluded. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The word or phrase to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}

---

### GoogleDialogflowCxEntityTypeTimeouts <a name="GoogleDialogflowCxEntityTypeTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeTimeouts;

GoogleDialogflowCxEntityTypeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxEntityTypeEntitiesList <a name="GoogleDialogflowCxEntityTypeEntitiesList" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeEntitiesList;

new GoogleDialogflowCxEntityTypeEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get"></a>

```java
public GoogleDialogflowCxEntityTypeEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>>

---


### GoogleDialogflowCxEntityTypeEntitiesOutputReference <a name="GoogleDialogflowCxEntityTypeEntitiesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeEntitiesOutputReference;

new GoogleDialogflowCxEntityTypeEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities">GoogleDialogflowCxEntityTypeEntities</a>

---


### GoogleDialogflowCxEntityTypeExcludedPhrasesList <a name="GoogleDialogflowCxEntityTypeExcludedPhrasesList" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeExcludedPhrasesList;

new GoogleDialogflowCxEntityTypeExcludedPhrasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get"></a>

```java
public GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>>

---


### GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference <a name="GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference;

new GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases">GoogleDialogflowCxEntityTypeExcludedPhrases</a>

---


### GoogleDialogflowCxEntityTypeTimeoutsOutputReference <a name="GoogleDialogflowCxEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_entity_type.GoogleDialogflowCxEntityTypeTimeoutsOutputReference;

new GoogleDialogflowCxEntityTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---



