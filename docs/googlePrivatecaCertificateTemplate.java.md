# `googlePrivatecaCertificateTemplate` Submodule <a name="`googlePrivatecaCertificateTemplate` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCertificateTemplate <a name="GooglePrivatecaCertificateTemplate" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template google_privateca_certificate_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplate;

GooglePrivatecaCertificateTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .identityConstraints(GooglePrivatecaCertificateTemplateIdentityConstraints)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maximumLifetime(java.lang.String)
//  .passthroughExtensions(GooglePrivatecaCertificateTemplatePassthroughExtensions)
//  .predefinedValues(GooglePrivatecaCertificateTemplatePredefinedValues)
//  .project(java.lang.String)
//  .timeouts(GooglePrivatecaCertificateTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of scenarios this template is intended for. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.maximumLifetime">maximumLifetime</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.passthroughExtensions">passthroughExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | passthrough_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.predefinedValues">predefinedValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | predefined_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#name GooglePrivatecaCertificateTemplate#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A human-readable description of scenarios this template is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityConstraints`<sup>Optional</sup> <a name="identityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.identityConstraints"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#identity_constraints GooglePrivatecaCertificateTemplate#identity_constraints}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels with user-defined metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#labels GooglePrivatecaCertificateTemplate#labels}

---

##### `maximumLifetime`<sup>Optional</sup> <a name="maximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.maximumLifetime"></a>

- *Type:* java.lang.String

Optional.

The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#maximum_lifetime GooglePrivatecaCertificateTemplate#maximum_lifetime}

---

##### `passthroughExtensions`<sup>Optional</sup> <a name="passthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.passthroughExtensions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

passthrough_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#passthrough_extensions GooglePrivatecaCertificateTemplate#passthrough_extensions}

---

##### `predefinedValues`<sup>Optional</sup> <a name="predefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.predefinedValues"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

predefined_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#predefined_values GooglePrivatecaCertificateTemplate#predefined_values}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#timeouts GooglePrivatecaCertificateTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints">putIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions">putPassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues">putPredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetIdentityConstraints">resetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetMaximumLifetime">resetMaximumLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPassthroughExtensions">resetPassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPredefinedValues">resetPredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityConstraints` <a name="putIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints"></a>

```java
public void putIdentityConstraints(GooglePrivatecaCertificateTemplateIdentityConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

---

##### `putPassthroughExtensions` <a name="putPassthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions"></a>

```java
public void putPassthroughExtensions(GooglePrivatecaCertificateTemplatePassthroughExtensions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

---

##### `putPredefinedValues` <a name="putPredefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues"></a>

```java
public void putPredefinedValues(GooglePrivatecaCertificateTemplatePredefinedValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts"></a>

```java
public void putTimeouts(GooglePrivatecaCertificateTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityConstraints` <a name="resetIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetIdentityConstraints"></a>

```java
public void resetIdentityConstraints()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaximumLifetime` <a name="resetMaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetMaximumLifetime"></a>

```java
public void resetMaximumLifetime()
```

##### `resetPassthroughExtensions` <a name="resetPassthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPassthroughExtensions"></a>

```java
public void resetPassthroughExtensions()
```

##### `resetPredefinedValues` <a name="resetPredefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPredefinedValues"></a>

```java
public void resetPredefinedValues()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivatecaCertificateTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplate;

GooglePrivatecaCertificateTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplate;

GooglePrivatecaCertificateTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplate;

GooglePrivatecaCertificateTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplate;

GooglePrivatecaCertificateTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePrivatecaCertificateTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GooglePrivatecaCertificateTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePrivatecaCertificateTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePrivatecaCertificateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivatecaCertificateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensions">passthroughExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference">GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValues">predefinedValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference">GooglePrivatecaCertificateTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraintsInput">identityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetimeInput">maximumLifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensionsInput">passthroughExtensionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValuesInput">predefinedValuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetime">maximumLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `identityConstraints`<sup>Required</sup> <a name="identityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraints"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference getIdentityConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference</a>

---

##### `passthroughExtensions`<sup>Required</sup> <a name="passthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensions"></a>

```java
public GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference getPassthroughExtensions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference">GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference</a>

---

##### `predefinedValues`<sup>Required</sup> <a name="predefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValues"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference getPredefinedValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeouts"></a>

```java
public GooglePrivatecaCertificateTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference">GooglePrivatecaCertificateTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `identityConstraintsInput`<sup>Optional</sup> <a name="identityConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraintsInput"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraints getIdentityConstraintsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maximumLifetimeInput`<sup>Optional</sup> <a name="maximumLifetimeInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetimeInput"></a>

```java
public java.lang.String getMaximumLifetimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passthroughExtensionsInput`<sup>Optional</sup> <a name="passthroughExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensionsInput"></a>

```java
public GooglePrivatecaCertificateTemplatePassthroughExtensions getPassthroughExtensionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

---

##### `predefinedValuesInput`<sup>Optional</sup> <a name="predefinedValuesInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValuesInput"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValues getPredefinedValuesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maximumLifetime`<sup>Required</sup> <a name="maximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetime"></a>

```java
public java.lang.String getMaximumLifetime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCertificateTemplateConfig <a name="GooglePrivatecaCertificateTemplateConfig" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateConfig;

GooglePrivatecaCertificateTemplateConfig.builder()
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .identityConstraints(GooglePrivatecaCertificateTemplateIdentityConstraints)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maximumLifetime(java.lang.String)
//  .passthroughExtensions(GooglePrivatecaCertificateTemplatePassthroughExtensions)
//  .predefinedValues(GooglePrivatecaCertificateTemplatePredefinedValues)
//  .project(java.lang.String)
//  .timeouts(GooglePrivatecaCertificateTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of scenarios this template is intended for. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.maximumLifetime">maximumLifetime</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.passthroughExtensions">passthroughExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | passthrough_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.predefinedValues">predefinedValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | predefined_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#name GooglePrivatecaCertificateTemplate#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human-readable description of scenarios this template is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityConstraints`<sup>Optional</sup> <a name="identityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.identityConstraints"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraints getIdentityConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#identity_constraints GooglePrivatecaCertificateTemplate#identity_constraints}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels with user-defined metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#labels GooglePrivatecaCertificateTemplate#labels}

---

##### `maximumLifetime`<sup>Optional</sup> <a name="maximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.maximumLifetime"></a>

```java
public java.lang.String getMaximumLifetime();
```

- *Type:* java.lang.String

Optional.

The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#maximum_lifetime GooglePrivatecaCertificateTemplate#maximum_lifetime}

---

##### `passthroughExtensions`<sup>Optional</sup> <a name="passthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.passthroughExtensions"></a>

```java
public GooglePrivatecaCertificateTemplatePassthroughExtensions getPassthroughExtensions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

passthrough_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#passthrough_extensions GooglePrivatecaCertificateTemplate#passthrough_extensions}

---

##### `predefinedValues`<sup>Optional</sup> <a name="predefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.predefinedValues"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValues getPredefinedValues();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

predefined_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#predefined_values GooglePrivatecaCertificateTemplate#predefined_values}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.timeouts"></a>

```java
public GooglePrivatecaCertificateTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#timeouts GooglePrivatecaCertificateTemplate#timeouts}

---

### GooglePrivatecaCertificateTemplateIdentityConstraints <a name="GooglePrivatecaCertificateTemplateIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateIdentityConstraints;

GooglePrivatecaCertificateTemplateIdentityConstraints.builder()
    .allowSubjectAltNamesPassthrough(java.lang.Boolean)
    .allowSubjectAltNamesPassthrough(IResolvable)
    .allowSubjectPassthrough(java.lang.Boolean)
    .allowSubjectPassthrough(IResolvable)
//  .celExpression(GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectAltNamesPassthrough">allowSubjectAltNamesPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectPassthrough">allowSubjectPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.celExpression">celExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `allowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="allowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```java
public java.lang.Object getAllowSubjectAltNamesPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Required.

If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#allow_subject_alt_names_passthrough GooglePrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}

---

##### `allowSubjectPassthrough`<sup>Required</sup> <a name="allowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectPassthrough"></a>

```java
public java.lang.Object getAllowSubjectPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Required.

If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#allow_subject_passthrough GooglePrivatecaCertificateTemplate#allow_subject_passthrough}

---

##### `celExpression`<sup>Optional</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.celExpression"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression getCelExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#cel_expression GooglePrivatecaCertificateTemplate#cel_expression}

---

### GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression <a name="GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression;

GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.builder()
//  .description(java.lang.String)
//  .expression(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.description">description</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.location">location</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.title">title</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#expression GooglePrivatecaCertificateTemplate#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#title GooglePrivatecaCertificateTemplate#title}

---

### GooglePrivatecaCertificateTemplatePassthroughExtensions <a name="GooglePrivatecaCertificateTemplatePassthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePassthroughExtensions;

GooglePrivatecaCertificateTemplatePassthroughExtensions.builder()
//  .additionalExtensions(IResolvable)
//  .additionalExtensions(java.util.List<GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions>)
//  .knownExtensions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.additionalExtensions">additionalExtensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>></code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.knownExtensions">knownExtensions</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |

---

##### `additionalExtensions`<sup>Optional</sup> <a name="additionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.additionalExtensions"></a>

```java
public java.lang.Object getAdditionalExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>>

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#additional_extensions GooglePrivatecaCertificateTemplate#additional_extensions}

---

##### `knownExtensions`<sup>Optional</sup> <a name="knownExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.knownExtensions"></a>

```java
public java.util.List<java.lang.String> getKnownExtensions();
```

- *Type:* java.util.List<java.lang.String>

Optional.

A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#known_extensions GooglePrivatecaCertificateTemplate#known_extensions}

---

### GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions;

GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplatePredefinedValues <a name="GooglePrivatecaCertificateTemplatePredefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValues;

GooglePrivatecaCertificateTemplatePredefinedValues.builder()
//  .additionalExtensions(IResolvable)
//  .additionalExtensions(java.util.List<GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions>)
//  .aiaOcspServers(java.util.List<java.lang.String>)
//  .caOptions(GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions)
//  .keyUsage(GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage)
//  .policyIds(IResolvable)
//  .policyIds(java.util.List<GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.additionalExtensions">additionalExtensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>></code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.aiaOcspServers">aiaOcspServers</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.policyIds">policyIds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>></code> | policy_ids block. |

---

##### `additionalExtensions`<sup>Optional</sup> <a name="additionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.additionalExtensions"></a>

```java
public java.lang.Object getAdditionalExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>>

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#additional_extensions GooglePrivatecaCertificateTemplate#additional_extensions}

---

##### `aiaOcspServers`<sup>Optional</sup> <a name="aiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.aiaOcspServers"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServers();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#aia_ocsp_servers GooglePrivatecaCertificateTemplate#aia_ocsp_servers}

---

##### `caOptions`<sup>Optional</sup> <a name="caOptions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.caOptions"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions getCaOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#ca_options GooglePrivatecaCertificateTemplate#ca_options}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.keyUsage"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage getKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_usage GooglePrivatecaCertificateTemplate#key_usage}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.policyIds"></a>

```java
public java.lang.Object getPolicyIds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>>

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#policy_ids GooglePrivatecaCertificateTemplate#policy_ids}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions;

GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.builder()
    .objectId(GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId)
    .value(java.lang.String)
//  .critical(java.lang.Boolean)
//  .critical(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.value">value</a></code> | <code>java.lang.String</code> | Required. The value of this X.509 extension. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.objectId"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId getObjectId();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id GooglePrivatecaCertificateTemplate#object_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Required. The value of this X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#value GooglePrivatecaCertificateTemplate#value}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#critical GooglePrivatecaCertificateTemplate#critical}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId;

GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions <a name="GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions;

GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.builder()
//  .isCa(java.lang.Boolean)
//  .isCa(IResolvable)
//  .maxIssuerPathLength(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.isCa">isCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `isCa`<sup>Optional</sup> <a name="isCa" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.isCa"></a>

```java
public java.lang.Object getIsCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#is_ca GooglePrivatecaCertificateTemplate#is_ca}

---

##### `maxIssuerPathLength`<sup>Optional</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.maxIssuerPathLength"></a>

```java
public java.lang.Number getMaxIssuerPathLength();
```

- *Type:* java.lang.Number

Optional.

Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#max_issuer_path_length GooglePrivatecaCertificateTemplate#max_issuer_path_length}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage;

GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.builder()
//  .baseKeyUsage(GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage)
//  .extendedKeyUsage(GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage)
//  .unknownExtendedKeyUsages(IResolvable)
//  .unknownExtendedKeyUsages(java.util.List<GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>></code> | unknown_extended_key_usages block. |

---

##### `baseKeyUsage`<sup>Optional</sup> <a name="baseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.baseKeyUsage"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage getBaseKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#base_key_usage GooglePrivatecaCertificateTemplate#base_key_usage}

---

##### `extendedKeyUsage`<sup>Optional</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.extendedKeyUsage"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage getExtendedKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#extended_key_usage GooglePrivatecaCertificateTemplate#extended_key_usage}

---

##### `unknownExtendedKeyUsages`<sup>Optional</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```java
public java.lang.Object getUnknownExtendedKeyUsages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>>

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#unknown_extended_key_usages GooglePrivatecaCertificateTemplate#unknown_extended_key_usages}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;

GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.builder()
//  .certSign(java.lang.Boolean)
//  .certSign(IResolvable)
//  .contentCommitment(java.lang.Boolean)
//  .contentCommitment(IResolvable)
//  .crlSign(java.lang.Boolean)
//  .crlSign(IResolvable)
//  .dataEncipherment(java.lang.Boolean)
//  .dataEncipherment(IResolvable)
//  .decipherOnly(java.lang.Boolean)
//  .decipherOnly(IResolvable)
//  .digitalSignature(java.lang.Boolean)
//  .digitalSignature(IResolvable)
//  .encipherOnly(java.lang.Boolean)
//  .encipherOnly(IResolvable)
//  .keyAgreement(java.lang.Boolean)
//  .keyAgreement(IResolvable)
//  .keyEncipherment(java.lang.Boolean)
//  .keyEncipherment(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.certSign">certSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.contentCommitment">contentCommitment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher other keys. |

---

##### `certSign`<sup>Optional</sup> <a name="certSign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```java
public java.lang.Object getCertSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#cert_sign GooglePrivatecaCertificateTemplate#cert_sign}

---

##### `contentCommitment`<sup>Optional</sup> <a name="contentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```java
public java.lang.Object getContentCommitment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#content_commitment GooglePrivatecaCertificateTemplate#content_commitment}

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```java
public java.lang.Object getCrlSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#crl_sign GooglePrivatecaCertificateTemplate#crl_sign}

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```java
public java.lang.Object getDataEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#data_encipherment GooglePrivatecaCertificateTemplate#data_encipherment}

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```java
public java.lang.Object getDecipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#decipher_only GooglePrivatecaCertificateTemplate#decipher_only}

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```java
public java.lang.Object getDigitalSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#digital_signature GooglePrivatecaCertificateTemplate#digital_signature}

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```java
public java.lang.Object getEncipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#encipher_only GooglePrivatecaCertificateTemplate#encipher_only}

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```java
public java.lang.Object getKeyAgreement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_agreement GooglePrivatecaCertificateTemplate#key_agreement}

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```java
public java.lang.Object getKeyEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_encipherment GooglePrivatecaCertificateTemplate#key_encipherment}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;

GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.builder()
//  .clientAuth(java.lang.Boolean)
//  .clientAuth(IResolvable)
//  .codeSigning(java.lang.Boolean)
//  .codeSigning(IResolvable)
//  .emailProtection(java.lang.Boolean)
//  .emailProtection(IResolvable)
//  .ocspSigning(java.lang.Boolean)
//  .ocspSigning(IResolvable)
//  .serverAuth(java.lang.Boolean)
//  .serverAuth(IResolvable)
//  .timeStamping(java.lang.Boolean)
//  .timeStamping(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.clientAuth">clientAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.codeSigning">codeSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.emailProtection">emailProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.ocspSigning">ocspSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.serverAuth">serverAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.timeStamping">timeStamping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```java
public java.lang.Object getClientAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#client_auth GooglePrivatecaCertificateTemplate#client_auth}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```java
public java.lang.Object getCodeSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#code_signing GooglePrivatecaCertificateTemplate#code_signing}

---

##### `emailProtection`<sup>Optional</sup> <a name="emailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```java
public java.lang.Object getEmailProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#email_protection GooglePrivatecaCertificateTemplate#email_protection}

---

##### `ocspSigning`<sup>Optional</sup> <a name="ocspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```java
public java.lang.Object getOcspSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#ocsp_signing GooglePrivatecaCertificateTemplate#ocsp_signing}

---

##### `serverAuth`<sup>Optional</sup> <a name="serverAuth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```java
public java.lang.Object getServerAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#server_auth GooglePrivatecaCertificateTemplate#server_auth}

---

##### `timeStamping`<sup>Optional</sup> <a name="timeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```java
public java.lang.Object getTimeStamping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#time_stamping GooglePrivatecaCertificateTemplate#time_stamping}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages;

GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds <a name="GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds;

GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplateTimeouts <a name="GooglePrivatecaCertificateTemplateTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateTimeouts;

GooglePrivatecaCertificateTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#create GooglePrivatecaCertificateTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#delete GooglePrivatecaCertificateTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#update GooglePrivatecaCertificateTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#create GooglePrivatecaCertificateTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#delete GooglePrivatecaCertificateTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#update GooglePrivatecaCertificateTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference <a name="GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference;

new GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---


### GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference <a name="GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference;

new GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression">putCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resetCelExpression">resetCelExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCelExpression` <a name="putCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression"></a>

```java
public void putCelExpression(GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---

##### `resetCelExpression` <a name="resetCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resetCelExpression"></a>

```java
public void resetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpression">celExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">allowSubjectAltNamesPassthroughInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">allowSubjectPassthroughInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">allowSubjectAltNamesPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthrough">allowSubjectPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpression"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference getCelExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference</a>

---

##### `allowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="allowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```java
public java.lang.Object getAllowSubjectAltNamesPassthroughInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubjectPassthroughInput`<sup>Optional</sup> <a name="allowSubjectPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```java
public java.lang.Object getAllowSubjectPassthroughInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression getCelExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---

##### `allowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="allowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```java
public java.lang.Object getAllowSubjectAltNamesPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubjectPassthrough`<sup>Required</sup> <a name="allowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```java
public java.lang.Object getAllowSubjectPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplateIdentityConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

---


### GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList;

new GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get"></a>

```java
public GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>>

---


### GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference;

new GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>

---


### GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference;

new GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions">putAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetAdditionalExtensions">resetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetKnownExtensions">resetKnownExtensions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalExtensions` <a name="putAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions"></a>

```java
public void putAdditionalExtensions(IResolvable OR java.util.List<GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>>

---

##### `resetAdditionalExtensions` <a name="resetAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetAdditionalExtensions"></a>

```java
public void resetAdditionalExtensions()
```

##### `resetKnownExtensions` <a name="resetKnownExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetKnownExtensions"></a>

```java
public void resetKnownExtensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensions">additionalExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensionsInput">additionalExtensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensionsInput">knownExtensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensions">knownExtensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalExtensions`<sup>Required</sup> <a name="additionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensions"></a>

```java
public GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList getAdditionalExtensions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList</a>

---

##### `additionalExtensionsInput`<sup>Optional</sup> <a name="additionalExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensionsInput"></a>

```java
public java.lang.Object getAdditionalExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>>

---

##### `knownExtensionsInput`<sup>Optional</sup> <a name="knownExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensionsInput"></a>

```java
public java.util.List<java.lang.String> getKnownExtensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `knownExtensions`<sup>Required</sup> <a name="knownExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensions"></a>

```java
public java.util.List<java.lang.String> getKnownExtensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePassthroughExtensions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList;

new GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId">putObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resetCritical">resetCritical</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectId` <a name="putObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```java
public void putObjectId(GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resetCritical"></a>

```java
public void resetCritical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectIdInput">objectIdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference getObjectId();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId getObjectIdInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetIsCa">resetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetMaxIssuerPathLength">resetMaxIssuerPathLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsCa` <a name="resetIsCa" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetIsCa"></a>

```java
public void resetIsCa()
```

##### `resetMaxIssuerPathLength` <a name="resetMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```java
public void resetMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCaInput">isCaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">maxIssuerPathLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCa">isCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isCaInput`<sup>Optional</sup> <a name="isCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCaInput"></a>

```java
public java.lang.Object getIsCaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIssuerPathLengthInput`<sup>Optional</sup> <a name="maxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```java
public java.lang.Number getMaxIssuerPathLengthInput();
```

- *Type:* java.lang.Number

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCa"></a>

```java
public java.lang.Object getIsCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIssuerPathLength`<sup>Required</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```java
public java.lang.Number getMaxIssuerPathLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">resetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">resetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertSign` <a name="resetCertSign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```java
public void resetCertSign()
```

##### `resetContentCommitment` <a name="resetContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```java
public void resetContentCommitment()
```

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```java
public void resetCrlSign()
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```java
public void resetDataEncipherment()
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```java
public void resetDecipherOnly()
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```java
public void resetDigitalSignature()
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```java
public void resetEncipherOnly()
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```java
public void resetKeyAgreement()
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```java
public void resetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">certSignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">contentCommitmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">certSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">contentCommitment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certSignInput`<sup>Optional</sup> <a name="certSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```java
public java.lang.Object getCertSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentCommitmentInput`<sup>Optional</sup> <a name="contentCommitmentInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```java
public java.lang.Object getContentCommitmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```java
public java.lang.Object getCrlSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```java
public java.lang.Object getDataEnciphermentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```java
public java.lang.Object getDecipherOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```java
public java.lang.Object getDigitalSignatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```java
public java.lang.Object getEncipherOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```java
public java.lang.Object getKeyAgreementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```java
public java.lang.Object getKeyEnciphermentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certSign`<sup>Required</sup> <a name="certSign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```java
public java.lang.Object getCertSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentCommitment`<sup>Required</sup> <a name="contentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```java
public java.lang.Object getContentCommitment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```java
public java.lang.Object getCrlSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```java
public java.lang.Object getDataEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```java
public java.lang.Object getDecipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```java
public java.lang.Object getDigitalSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```java
public java.lang.Object getEncipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```java
public java.lang.Object getKeyAgreement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```java
public java.lang.Object getKeyEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">resetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">resetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">resetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">resetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">resetTimeStamping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```java
public void resetClientAuth()
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```java
public void resetCodeSigning()
```

##### `resetEmailProtection` <a name="resetEmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```java
public void resetEmailProtection()
```

##### `resetOcspSigning` <a name="resetOcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```java
public void resetOcspSigning()
```

##### `resetServerAuth` <a name="resetServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```java
public void resetServerAuth()
```

##### `resetTimeStamping` <a name="resetTimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```java
public void resetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">clientAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">emailProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">ocspSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">serverAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">timeStampingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">clientAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">codeSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">emailProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">ocspSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">serverAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">timeStamping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```java
public java.lang.Object getClientAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```java
public java.lang.Object getCodeSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailProtectionInput`<sup>Optional</sup> <a name="emailProtectionInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```java
public java.lang.Object getEmailProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspSigningInput`<sup>Optional</sup> <a name="ocspSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```java
public java.lang.Object getOcspSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverAuthInput`<sup>Optional</sup> <a name="serverAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```java
public java.lang.Object getServerAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeStampingInput`<sup>Optional</sup> <a name="timeStampingInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```java
public java.lang.Object getTimeStampingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientAuth`<sup>Required</sup> <a name="clientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```java
public java.lang.Object getClientAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```java
public java.lang.Object getCodeSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailProtection`<sup>Required</sup> <a name="emailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```java
public java.lang.Object getEmailProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspSigning`<sup>Required</sup> <a name="ocspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```java
public java.lang.Object getOcspSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverAuth`<sup>Required</sup> <a name="serverAuth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```java
public java.lang.Object getServerAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeStamping`<sup>Required</sup> <a name="timeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```java
public java.lang.Object getTimeStamping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage">putBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage">putExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">putUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetBaseKeyUsage">resetBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetExtendedKeyUsage">resetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">resetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseKeyUsage` <a name="putBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```java
public void putBaseKeyUsage(GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---

##### `putExtendedKeyUsage` <a name="putExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```java
public void putExtendedKeyUsage(GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---

##### `putUnknownExtendedKeyUsages` <a name="putUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```java
public void putUnknownExtendedKeyUsages(IResolvable OR java.util.List<GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>>

---

##### `resetBaseKeyUsage` <a name="resetBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetBaseKeyUsage"></a>

```java
public void resetBaseKeyUsage()
```

##### `resetExtendedKeyUsage` <a name="resetExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetExtendedKeyUsage"></a>

```java
public void resetExtendedKeyUsage()
```

##### `resetUnknownExtendedKeyUsages` <a name="resetUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```java
public void resetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsageInput">baseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">unknownExtendedKeyUsagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference getBaseKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference getExtendedKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `unknownExtendedKeyUsages`<sup>Required</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList getUnknownExtendedKeyUsages();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `baseKeyUsageInput`<sup>Optional</sup> <a name="baseKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage getBaseKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage getExtendedKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---

##### `unknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="unknownExtendedKeyUsagesInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```java
public java.lang.Object getUnknownExtendedKeyUsagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList;

new GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions">putAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions">putCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds">putPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAdditionalExtensions">resetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAiaOcspServers">resetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetCaOptions">resetCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalExtensions` <a name="putAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions"></a>

```java
public void putAdditionalExtensions(IResolvable OR java.util.List<GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>>

---

##### `putCaOptions` <a name="putCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions"></a>

```java
public void putCaOptions(GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage"></a>

```java
public void putKeyUsage(GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---

##### `putPolicyIds` <a name="putPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds"></a>

```java
public void putPolicyIds(IResolvable OR java.util.List<GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>>

---

##### `resetAdditionalExtensions` <a name="resetAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAdditionalExtensions"></a>

```java
public void resetAdditionalExtensions()
```

##### `resetAiaOcspServers` <a name="resetAiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAiaOcspServers"></a>

```java
public void resetAiaOcspServers()
```

##### `resetCaOptions` <a name="resetCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetCaOptions"></a>

```java
public void resetCaOptions()
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetKeyUsage"></a>

```java
public void resetKeyUsage()
```

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetPolicyIds"></a>

```java
public void resetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensions">additionalExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIds">policyIds</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensionsInput">additionalExtensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServersInput">aiaOcspServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptionsInput">caOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIdsInput">policyIdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServers">aiaOcspServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalExtensions`<sup>Required</sup> <a name="additionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensions"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList getAdditionalExtensions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList</a>

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptions"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference getCaOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsage"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference getKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIds"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList getPolicyIds();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList</a>

---

##### `additionalExtensionsInput`<sup>Optional</sup> <a name="additionalExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensionsInput"></a>

```java
public java.lang.Object getAdditionalExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>>

---

##### `aiaOcspServersInput`<sup>Optional</sup> <a name="aiaOcspServersInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServersInput"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caOptionsInput`<sup>Optional</sup> <a name="caOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptionsInput"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions getCaOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsageInput"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage getKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIdsInput"></a>

```java
public java.lang.Object getPolicyIdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>>

---

##### `aiaOcspServers`<sup>Required</sup> <a name="aiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServers"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList <a name="GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList;

new GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get"></a>

```java
public GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference;

new GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>

---


### GooglePrivatecaCertificateTemplateTimeoutsOutputReference <a name="GooglePrivatecaCertificateTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_certificate_template.GooglePrivatecaCertificateTemplateTimeoutsOutputReference;

new GooglePrivatecaCertificateTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

---



