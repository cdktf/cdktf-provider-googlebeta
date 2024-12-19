# `googleTranscoderJobTemplate` Submodule <a name="`googleTranscoderJobTemplate` Submodule" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTranscoderJobTemplate <a name="GoogleTranscoderJobTemplate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template google_transcoder_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplate(Construct Scope, string Id, GoogleTranscoderJobTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig">GoogleTranscoderJobTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig">GoogleTranscoderJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putConfig"></a>

```csharp
private void PutConfig(GoogleTranscoderJobTemplateConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleTranscoderJobTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts">GoogleTranscoderJobTemplateTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTranscoderJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleTranscoderJobTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleTranscoderJobTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleTranscoderJobTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleTranscoderJobTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleTranscoderJobTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleTranscoderJobTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleTranscoderJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTranscoderJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference">GoogleTranscoderJobTemplateConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference">GoogleTranscoderJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateIdInput">JobTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateId">JobTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.config"></a>

```csharp
public GoogleTranscoderJobTemplateConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference">GoogleTranscoderJobTemplateConfigAOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeouts"></a>

```csharp
public GoogleTranscoderJobTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference">GoogleTranscoderJobTemplateTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.configInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobTemplateIdInput`<sup>Optional</sup> <a name="JobTemplateIdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateIdInput"></a>

```csharp
public string JobTemplateIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateId"></a>

```csharp
public string JobTemplateId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTranscoderJobTemplateConfig <a name="GoogleTranscoderJobTemplateConfig" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JobTemplateId,
    string Location,
    GoogleTranscoderJobTemplateConfigA Config = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleTranscoderJobTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.jobTemplateId">JobTemplateId</a></code> | <code>string</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#id GoogleTranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#project GoogleTranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts">GoogleTranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.jobTemplateId"></a>

```csharp
public string JobTemplateId { get; set; }
```

- *Type:* string

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#job_template_id GoogleTranscoderJobTemplate#job_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#location GoogleTranscoderJobTemplate#location}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.config"></a>

```csharp
public GoogleTranscoderJobTemplateConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#config GoogleTranscoderJobTemplate#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#id GoogleTranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#labels GoogleTranscoderJobTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#project GoogleTranscoderJobTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.timeouts"></a>

```csharp
public GoogleTranscoderJobTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts">GoogleTranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#timeouts GoogleTranscoderJobTemplate#timeouts}

---

### GoogleTranscoderJobTemplateConfigA <a name="GoogleTranscoderJobTemplateConfigA" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigA {
    object AdBreaks = null,
    object EditList = null,
    object ElementaryStreams = null,
    object Encryptions = null,
    object Inputs = null,
    object Manifests = null,
    object MuxStreams = null,
    GoogleTranscoderJobTemplateConfigOutput Output = null,
    object Overlays = null,
    GoogleTranscoderJobTemplateConfigPubsubDestination PubsubDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.adBreaks">AdBreaks</a></code> | <code>object</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.editList">EditList</a></code> | <code>object</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.elementaryStreams">ElementaryStreams</a></code> | <code>object</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.encryptions">Encryptions</a></code> | <code>object</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.inputs">Inputs</a></code> | <code>object</code> | inputs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.manifests">Manifests</a></code> | <code>object</code> | manifests block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.muxStreams">MuxStreams</a></code> | <code>object</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.overlays">Overlays</a></code> | <code>object</code> | overlays block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.adBreaks"></a>

```csharp
public object AdBreaks { get; set; }
```

- *Type:* object

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#ad_breaks GoogleTranscoderJobTemplate#ad_breaks}

---

##### `EditList`<sup>Optional</sup> <a name="EditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.editList"></a>

```csharp
public object EditList { get; set; }
```

- *Type:* object

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#edit_list GoogleTranscoderJobTemplate#edit_list}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.elementaryStreams"></a>

```csharp
public object ElementaryStreams { get; set; }
```

- *Type:* object

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#elementary_streams GoogleTranscoderJobTemplate#elementary_streams}

---

##### `Encryptions`<sup>Optional</sup> <a name="Encryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.encryptions"></a>

```csharp
public object Encryptions { get; set; }
```

- *Type:* object

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#encryptions GoogleTranscoderJobTemplate#encryptions}

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.inputs"></a>

```csharp
public object Inputs { get; set; }
```

- *Type:* object

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#inputs GoogleTranscoderJobTemplate#inputs}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.manifests"></a>

```csharp
public object Manifests { get; set; }
```

- *Type:* object

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#manifests GoogleTranscoderJobTemplate#manifests}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.muxStreams"></a>

```csharp
public object MuxStreams { get; set; }
```

- *Type:* object

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#mux_streams GoogleTranscoderJobTemplate#mux_streams}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.output"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOutput Output { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#output GoogleTranscoderJobTemplate#output}

---

##### `Overlays`<sup>Optional</sup> <a name="Overlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.overlays"></a>

```csharp
public object Overlays { get; set; }
```

- *Type:* object

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#overlays GoogleTranscoderJobTemplate#overlays}

---

##### `PubsubDestination`<sup>Optional</sup> <a name="PubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.pubsubDestination"></a>

```csharp
public GoogleTranscoderJobTemplateConfigPubsubDestination PubsubDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#pubsub_destination GoogleTranscoderJobTemplate#pubsub_destination}

---

### GoogleTranscoderJobTemplateConfigAdBreaks <a name="GoogleTranscoderJobTemplateConfigAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigAdBreaks {
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#start_time_offset GoogleTranscoderJobTemplate#start_time_offset}

---

### GoogleTranscoderJobTemplateConfigEditListStruct <a name="GoogleTranscoderJobTemplateConfigEditListStruct" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEditListStruct {
    string[] Inputs = null,
    string Key = null,
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.inputs">Inputs</a></code> | <code>string[]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.key">Key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'. |

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#inputs GoogleTranscoderJobTemplate#inputs}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#start_time_offset GoogleTranscoderJobTemplate#start_time_offset}

---

### GoogleTranscoderJobTemplateConfigElementaryStreams <a name="GoogleTranscoderJobTemplateConfigElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreams {
    GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream AudioStream = null,
    string Key = null,
    GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream VideoStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.key">Key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `AudioStream`<sup>Optional</sup> <a name="AudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.audioStream"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream AudioStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#audio_stream GoogleTranscoderJobTemplate#audio_stream}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `VideoStream`<sup>Optional</sup> <a name="VideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.videoStream"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream VideoStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#video_stream GoogleTranscoderJobTemplate#video_stream}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream {
    double BitrateBps,
    double ChannelCount = null,
    string[] ChannelLayout = null,
    string Codec = null,
    double SampleRateHertz = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount">ChannelCount</a></code> | <code>double</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout">ChannelLayout</a></code> | <code>string[]</code> | A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec">Codec</a></code> | <code>string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; set; }
```

- *Type:* double

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#bitrate_bps GoogleTranscoderJobTemplate#bitrate_bps}

---

##### `ChannelCount`<sup>Optional</sup> <a name="ChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount"></a>

```csharp
public double ChannelCount { get; set; }
```

- *Type:* double

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#channel_count GoogleTranscoderJobTemplate#channel_count}

---

##### `ChannelLayout`<sup>Optional</sup> <a name="ChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```csharp
public string[] ChannelLayout { get; set; }
```

- *Type:* string[]

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#channel_layout GoogleTranscoderJobTemplate#channel_layout}

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec"></a>

```csharp
public string Codec { get; set; }
```

- *Type:* string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#codec GoogleTranscoderJobTemplate#codec}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; set; }
```

- *Type:* double

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#sample_rate_hertz GoogleTranscoderJobTemplate#sample_rate_hertz}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream {
    GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 H264 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `H264`<sup>Optional</sup> <a name="H264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 H264 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#h264 GoogleTranscoderJobTemplate#h264}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 {
    double BitrateBps,
    double FrameRate,
    double CrfLevel = null,
    string EntropyCoder = null,
    string GopDuration = null,
    double HeightPixels = null,
    GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg Hlg = null,
    string PixelFormat = null,
    string Preset = null,
    string Profile = null,
    string RateControlMode = null,
    GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr Sdr = null,
    double VbvFullnessBits = null,
    double VbvSizeBits = null,
    double WidthPixels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate">FrameRate</a></code> | <code>double</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel">CrfLevel</a></code> | <code>double</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder">EntropyCoder</a></code> | <code>string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration">GopDuration</a></code> | <code>string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels">HeightPixels</a></code> | <code>double</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat">PixelFormat</a></code> | <code>string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset">Preset</a></code> | <code>string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile">Profile</a></code> | <code>string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode">RateControlMode</a></code> | <code>string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>double</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">VbvSizeBits</a></code> | <code>double</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels">WidthPixels</a></code> | <code>double</code> | The width of the video in pixels. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; set; }
```

- *Type:* double

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#bitrate_bps GoogleTranscoderJobTemplate#bitrate_bps}

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```csharp
public double FrameRate { get; set; }
```

- *Type:* double

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#frame_rate GoogleTranscoderJobTemplate#frame_rate}

---

##### `CrfLevel`<sup>Optional</sup> <a name="CrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```csharp
public double CrfLevel { get; set; }
```

- *Type:* double

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#crf_level GoogleTranscoderJobTemplate#crf_level}

---

##### `EntropyCoder`<sup>Optional</sup> <a name="EntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```csharp
public string EntropyCoder { get; set; }
```

- *Type:* string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#entropy_coder GoogleTranscoderJobTemplate#entropy_coder}

---

##### `GopDuration`<sup>Optional</sup> <a name="GopDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```csharp
public string GopDuration { get; set; }
```

- *Type:* string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#gop_duration GoogleTranscoderJobTemplate#gop_duration}

---

##### `HeightPixels`<sup>Optional</sup> <a name="HeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```csharp
public double HeightPixels { get; set; }
```

- *Type:* double

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#height_pixels GoogleTranscoderJobTemplate#height_pixels}

---

##### `Hlg`<sup>Optional</sup> <a name="Hlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg Hlg { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#hlg GoogleTranscoderJobTemplate#hlg}

---

##### `PixelFormat`<sup>Optional</sup> <a name="PixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```csharp
public string PixelFormat { get; set; }
```

- *Type:* string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#pixel_format GoogleTranscoderJobTemplate#pixel_format}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```csharp
public string Preset { get; set; }
```

- *Type:* string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#preset GoogleTranscoderJobTemplate#preset}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#profile GoogleTranscoderJobTemplate#profile}

---

##### `RateControlMode`<sup>Optional</sup> <a name="RateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```csharp
public string RateControlMode { get; set; }
```

- *Type:* string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#rate_control_mode GoogleTranscoderJobTemplate#rate_control_mode}

---

##### `Sdr`<sup>Optional</sup> <a name="Sdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr Sdr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#sdr GoogleTranscoderJobTemplate#sdr}

---

##### `VbvFullnessBits`<sup>Optional</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```csharp
public double VbvFullnessBits { get; set; }
```

- *Type:* double

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#vbv_fullness_bits GoogleTranscoderJobTemplate#vbv_fullness_bits}

---

##### `VbvSizeBits`<sup>Optional</sup> <a name="VbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```csharp
public double VbvSizeBits { get; set; }
```

- *Type:* double

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#vbv_size_bits GoogleTranscoderJobTemplate#vbv_size_bits}

---

##### `WidthPixels`<sup>Optional</sup> <a name="WidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```csharp
public double WidthPixels { get; set; }
```

- *Type:* double

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#width_pixels GoogleTranscoderJobTemplate#width_pixels}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg {

};
```


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr {

};
```


### GoogleTranscoderJobTemplateConfigEncryptions <a name="GoogleTranscoderJobTemplateConfigEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptions {
    string Id,
    GoogleTranscoderJobTemplateConfigEncryptionsAes128 Aes128 = null,
    GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems DrmSystems = null,
    GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc MpegCenc = null,
    GoogleTranscoderJobTemplateConfigEncryptionsSampleAes SampleAes = null,
    GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource SecretManagerKeySource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.id">Id</a></code> | <code>string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#id GoogleTranscoderJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Aes128`<sup>Optional</sup> <a name="Aes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.aes128"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsAes128 Aes128 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#aes128 GoogleTranscoderJobTemplate#aes128}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.drmSystems"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems DrmSystems { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#drm_systems GoogleTranscoderJobTemplate#drm_systems}

---

##### `MpegCenc`<sup>Optional</sup> <a name="MpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.mpegCenc"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc MpegCenc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#mpeg_cenc GoogleTranscoderJobTemplate#mpeg_cenc}

---

##### `SampleAes`<sup>Optional</sup> <a name="SampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.sampleAes"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSampleAes SampleAes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#sample_aes GoogleTranscoderJobTemplate#sample_aes}

---

##### `SecretManagerKeySource`<sup>Optional</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource SecretManagerKeySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#secret_manager_key_source GoogleTranscoderJobTemplate#secret_manager_key_source}

---

### GoogleTranscoderJobTemplateConfigEncryptionsAes128 <a name="GoogleTranscoderJobTemplateConfigEncryptionsAes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsAes128 {

};
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems {
    GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey Clearkey = null,
    GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay Fairplay = null,
    GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready Playready = null,
    GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine Widevine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `Clearkey`<sup>Optional</sup> <a name="Clearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey Clearkey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#clearkey GoogleTranscoderJobTemplate#clearkey}

---

##### `Fairplay`<sup>Optional</sup> <a name="Fairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay Fairplay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#fairplay GoogleTranscoderJobTemplate#fairplay}

---

##### `Playready`<sup>Optional</sup> <a name="Playready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready Playready { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#playready GoogleTranscoderJobTemplate#playready}

---

##### `Widevine`<sup>Optional</sup> <a name="Widevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine Widevine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#widevine GoogleTranscoderJobTemplate#widevine}

---

### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey {

};
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay {

};
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready {

};
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine {

};
```


### GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc <a name="GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc {
    string Scheme
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme">Scheme</a></code> | <code>string</code> | Specify the encryption scheme. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#scheme GoogleTranscoderJobTemplate#scheme}

---

### GoogleTranscoderJobTemplateConfigEncryptionsSampleAes <a name="GoogleTranscoderJobTemplateConfigEncryptionsSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsSampleAes {

};
```


### GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource <a name="GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#secret_version GoogleTranscoderJobTemplate#secret_version}

---

### GoogleTranscoderJobTemplateConfigInputs <a name="GoogleTranscoderJobTemplateConfigInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigInputs {
    string Key = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.key">Key</a></code> | <code>string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.uri">Uri</a></code> | <code>string</code> | URI of the media. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#uri GoogleTranscoderJobTemplate#uri}

---

### GoogleTranscoderJobTemplateConfigManifests <a name="GoogleTranscoderJobTemplateConfigManifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigManifests {
    string FileName = null,
    string[] MuxStreams = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.fileName">FileName</a></code> | <code>string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.muxStreams">MuxStreams</a></code> | <code>string[]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.type">Type</a></code> | <code>string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#file_name GoogleTranscoderJobTemplate#file_name}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.muxStreams"></a>

```csharp
public string[] MuxStreams { get; set; }
```

- *Type:* string[]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#mux_streams GoogleTranscoderJobTemplate#mux_streams}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#type GoogleTranscoderJobTemplate#type}

---

### GoogleTranscoderJobTemplateConfigMuxStreams <a name="GoogleTranscoderJobTemplateConfigMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigMuxStreams {
    string Container = null,
    string[] ElementaryStreams = null,
    string EncryptionId = null,
    string FileName = null,
    string Key = null,
    GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings SegmentSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.container">Container</a></code> | <code>string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.elementaryStreams">ElementaryStreams</a></code> | <code>string[]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.encryptionId">EncryptionId</a></code> | <code>string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.fileName">FileName</a></code> | <code>string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.key">Key</a></code> | <code>string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#container GoogleTranscoderJobTemplate#container}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.elementaryStreams"></a>

```csharp
public string[] ElementaryStreams { get; set; }
```

- *Type:* string[]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#elementary_streams GoogleTranscoderJobTemplate#elementary_streams}

---

##### `EncryptionId`<sup>Optional</sup> <a name="EncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.encryptionId"></a>

```csharp
public string EncryptionId { get; set; }
```

- *Type:* string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#encryption_id GoogleTranscoderJobTemplate#encryption_id}

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#file_name GoogleTranscoderJobTemplate#file_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `SegmentSettings`<sup>Optional</sup> <a name="SegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.segmentSettings"></a>

```csharp
public GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings SegmentSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#segment_settings GoogleTranscoderJobTemplate#segment_settings}

---

### GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings <a name="GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings {
    string SegmentDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration">SegmentDuration</a></code> | <code>string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `SegmentDuration`<sup>Optional</sup> <a name="SegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```csharp
public string SegmentDuration { get; set; }
```

- *Type:* string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#segment_duration GoogleTranscoderJobTemplate#segment_duration}

---

### GoogleTranscoderJobTemplateConfigOutput <a name="GoogleTranscoderJobTemplateConfigOutput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOutput {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput.property.uri">Uri</a></code> | <code>string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#uri GoogleTranscoderJobTemplate#uri}

---

### GoogleTranscoderJobTemplateConfigOverlays <a name="GoogleTranscoderJobTemplateConfigOverlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlays {
    object Animations = null,
    GoogleTranscoderJobTemplateConfigOverlaysImage Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.animations">Animations</a></code> | <code>object</code> | animations block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a></code> | image block. |

---

##### `Animations`<sup>Optional</sup> <a name="Animations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.animations"></a>

```csharp
public object Animations { get; set; }
```

- *Type:* object

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#animations GoogleTranscoderJobTemplate#animations}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.image"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysImage Image { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#image GoogleTranscoderJobTemplate#image}

---

### GoogleTranscoderJobTemplateConfigOverlaysAnimations <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimations {
    GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade AnimationFade = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `AnimationFade`<sup>Optional</sup> <a name="AnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations.property.animationFade"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade AnimationFade { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#animation_fade GoogleTranscoderJobTemplate#animation_fade}

---

### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade {
    string FadeType,
    string EndTimeOffset = null,
    string StartTimeOffset = null,
    GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy Xy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType">FadeType</a></code> | <code>string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```csharp
public string FadeType { get; set; }
```

- *Type:* string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#fade_type GoogleTranscoderJobTemplate#fade_type}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; set; }
```

- *Type:* string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#end_time_offset GoogleTranscoderJobTemplate#end_time_offset}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#start_time_offset GoogleTranscoderJobTemplate#start_time_offset}

---

##### `Xy`<sup>Optional</sup> <a name="Xy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy Xy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#xy GoogleTranscoderJobTemplate#xy}

---

### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy {
    double X = null,
    double Y = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x">X</a></code> | <code>double</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y">Y</a></code> | <code>double</code> | Normalized y coordinate. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```csharp
public double X { get; set; }
```

- *Type:* double

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#x GoogleTranscoderJobTemplate#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```csharp
public double Y { get; set; }
```

- *Type:* double

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#y GoogleTranscoderJobTemplate#y}

---

### GoogleTranscoderJobTemplateConfigOverlaysImage <a name="GoogleTranscoderJobTemplateConfigOverlaysImage" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysImage {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage.property.uri">Uri</a></code> | <code>string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#uri GoogleTranscoderJobTemplate#uri}

---

### GoogleTranscoderJobTemplateConfigPubsubDestination <a name="GoogleTranscoderJobTemplateConfigPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigPubsubDestination {
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination.property.topic">Topic</a></code> | <code>string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#topic GoogleTranscoderJobTemplate#topic}

---

### GoogleTranscoderJobTemplateTimeouts <a name="GoogleTranscoderJobTemplateTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#create GoogleTranscoderJobTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#delete GoogleTranscoderJobTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#update GoogleTranscoderJobTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#create GoogleTranscoderJobTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#delete GoogleTranscoderJobTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job_template#update GoogleTranscoderJobTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTranscoderJobTemplateConfigAdBreaksList <a name="GoogleTranscoderJobTemplateConfigAdBreaksList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigAdBreaksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigAdBreaksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigAdBreaksOutputReference <a name="GoogleTranscoderJobTemplateConfigAdBreaksOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigAdBreaksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigAOutputReference <a name="GoogleTranscoderJobTemplateConfigAOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEditList">PutEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putElementaryStreams">PutElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEncryptions">PutEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putManifests">PutManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putMuxStreams">PutMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOverlays">PutOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEditList">ResetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEncryptions">ResetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOverlays">ResetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetPubsubDestination">ResetPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putAdBreaks"></a>

```csharp
private void PutAdBreaks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* object

---

##### `PutEditList` <a name="PutEditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEditList"></a>

```csharp
private void PutEditList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* object

---

##### `PutElementaryStreams` <a name="PutElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putElementaryStreams"></a>

```csharp
private void PutElementaryStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* object

---

##### `PutEncryptions` <a name="PutEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEncryptions"></a>

```csharp
private void PutEncryptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* object

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putInputs"></a>

```csharp
private void PutInputs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* object

---

##### `PutManifests` <a name="PutManifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putManifests"></a>

```csharp
private void PutManifests(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* object

---

##### `PutMuxStreams` <a name="PutMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putMuxStreams"></a>

```csharp
private void PutMuxStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* object

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOutput"></a>

```csharp
private void PutOutput(GoogleTranscoderJobTemplateConfigOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

---

##### `PutOverlays` <a name="PutOverlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOverlays"></a>

```csharp
private void PutOverlays(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* object

---

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putPubsubDestination"></a>

```csharp
private void PutPubsubDestination(GoogleTranscoderJobTemplateConfigPubsubDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetAdBreaks"></a>

```csharp
private void ResetAdBreaks()
```

##### `ResetEditList` <a name="ResetEditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEditList"></a>

```csharp
private void ResetEditList()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetElementaryStreams"></a>

```csharp
private void ResetElementaryStreams()
```

##### `ResetEncryptions` <a name="ResetEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEncryptions"></a>

```csharp
private void ResetEncryptions()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetManifests"></a>

```csharp
private void ResetManifests()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetMuxStreams"></a>

```csharp
private void ResetMuxStreams()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetOverlays` <a name="ResetOverlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOverlays"></a>

```csharp
private void ResetOverlays()
```

##### `ResetPubsubDestination` <a name="ResetPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetPubsubDestination"></a>

```csharp
private void ResetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList">GoogleTranscoderJobTemplateConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editList">EditList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList">GoogleTranscoderJobTemplateConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList">GoogleTranscoderJobTemplateConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptions">Encryptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList">GoogleTranscoderJobTemplateConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList">GoogleTranscoderJobTemplateConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList">GoogleTranscoderJobTemplateConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreams">MuxStreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList">GoogleTranscoderJobTemplateConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference">GoogleTranscoderJobTemplateConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlays">Overlays</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList">GoogleTranscoderJobTemplateConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference">GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editListInput">EditListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptionsInput">EncryptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputsInput">InputsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifestsInput">ManifestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlaysInput">OverlaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaks"></a>

```csharp
public GoogleTranscoderJobTemplateConfigAdBreaksList AdBreaks { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList">GoogleTranscoderJobTemplateConfigAdBreaksList</a>

---

##### `EditList`<sup>Required</sup> <a name="EditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editList"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEditListStructList EditList { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList">GoogleTranscoderJobTemplateConfigEditListStructList</a>

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreams"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsList ElementaryStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList">GoogleTranscoderJobTemplateConfigElementaryStreamsList</a>

---

##### `Encryptions`<sup>Required</sup> <a name="Encryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptions"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsList Encryptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList">GoogleTranscoderJobTemplateConfigEncryptionsList</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputs"></a>

```csharp
public GoogleTranscoderJobTemplateConfigInputsList Inputs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList">GoogleTranscoderJobTemplateConfigInputsList</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifests"></a>

```csharp
public GoogleTranscoderJobTemplateConfigManifestsList Manifests { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList">GoogleTranscoderJobTemplateConfigManifestsList</a>

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreams"></a>

```csharp
public GoogleTranscoderJobTemplateConfigMuxStreamsList MuxStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList">GoogleTranscoderJobTemplateConfigMuxStreamsList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.output"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference">GoogleTranscoderJobTemplateConfigOutputOutputReference</a>

---

##### `Overlays`<sup>Required</sup> <a name="Overlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlays"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysList Overlays { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList">GoogleTranscoderJobTemplateConfigOverlaysList</a>

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestination"></a>

```csharp
public GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference PubsubDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference">GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaksInput"></a>

```csharp
public object AdBreaksInput { get; }
```

- *Type:* object

---

##### `EditListInput`<sup>Optional</sup> <a name="EditListInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editListInput"></a>

```csharp
public object EditListInput { get; }
```

- *Type:* object

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput"></a>

```csharp
public object ElementaryStreamsInput { get; }
```

- *Type:* object

---

##### `EncryptionsInput`<sup>Optional</sup> <a name="EncryptionsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptionsInput"></a>

```csharp
public object EncryptionsInput { get; }
```

- *Type:* object

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputsInput"></a>

```csharp
public object InputsInput { get; }
```

- *Type:* object

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifestsInput"></a>

```csharp
public object ManifestsInput { get; }
```

- *Type:* object

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput"></a>

```csharp
public object MuxStreamsInput { get; }
```

- *Type:* object

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.outputInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOutput OutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

---

##### `OverlaysInput`<sup>Optional</sup> <a name="OverlaysInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlaysInput"></a>

```csharp
public object OverlaysInput { get; }
```

- *Type:* object

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigPubsubDestination PubsubDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

---


### GoogleTranscoderJobTemplateConfigEditListStructList <a name="GoogleTranscoderJobTemplateConfigEditListStructList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEditListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigEditListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigEditListStructOutputReference <a name="GoogleTranscoderJobTemplateConfigEditListStructOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEditListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">ResetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">ResetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelCount` <a name="ResetChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```csharp
private void ResetChannelCount()
```

##### `ResetChannelLayout` <a name="ResetChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```csharp
private void ResetChannelLayout()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```csharp
private void ResetCodec()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```csharp
private void ResetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">ChannelCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">ChannelLayoutInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">CodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">ChannelCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">ChannelLayout</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec">Codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```csharp
public double BitrateBpsInput { get; }
```

- *Type:* double

---

##### `ChannelCountInput`<sup>Optional</sup> <a name="ChannelCountInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```csharp
public double ChannelCountInput { get; }
```

- *Type:* double

---

##### `ChannelLayoutInput`<sup>Optional</sup> <a name="ChannelLayoutInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```csharp
public string[] ChannelLayoutInput { get; }
```

- *Type:* string[]

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```csharp
public string CodecInput { get; }
```

- *Type:* string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```csharp
public double SampleRateHertzInput { get; }
```

- *Type:* double

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; }
```

- *Type:* double

---

##### `ChannelCount`<sup>Required</sup> <a name="ChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```csharp
public double ChannelCount { get; }
```

- *Type:* double

---

##### `ChannelLayout`<sup>Required</sup> <a name="ChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```csharp
public string[] ChannelLayout { get; }
```

- *Type:* string[]

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```csharp
public string Codec { get; }
```

- *Type:* string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsList <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream">PutAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream">PutVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream">ResetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream">ResetVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioStream` <a name="PutAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream"></a>

```csharp
private void PutAudioStream(GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `PutVideoStream` <a name="PutVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream"></a>

```csharp
private void PutVideoStream(GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `ResetAudioStream` <a name="ResetAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```csharp
private void ResetAudioStream()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVideoStream` <a name="ResetVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```csharp
private void ResetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput">AudioStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput">VideoStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioStream`<sup>Required</sup> <a name="AudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference AudioStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `VideoStream`<sup>Required</sup> <a name="VideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference VideoStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `AudioStreamInput`<sup>Optional</sup> <a name="AudioStreamInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream AudioStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VideoStreamInput`<sup>Optional</sup> <a name="VideoStreamInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream VideoStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">PutHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">PutSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">ResetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">ResetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">ResetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">ResetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">ResetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">ResetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">ResetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">ResetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">ResetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">ResetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">ResetWidthPixels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlg` <a name="PutHlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```csharp
private void PutHlg(GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PutSdr` <a name="PutSdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```csharp
private void PutSdr(GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `ResetCrfLevel` <a name="ResetCrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```csharp
private void ResetCrfLevel()
```

##### `ResetEntropyCoder` <a name="ResetEntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```csharp
private void ResetEntropyCoder()
```

##### `ResetGopDuration` <a name="ResetGopDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```csharp
private void ResetGopDuration()
```

##### `ResetHeightPixels` <a name="ResetHeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```csharp
private void ResetHeightPixels()
```

##### `ResetHlg` <a name="ResetHlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```csharp
private void ResetHlg()
```

##### `ResetPixelFormat` <a name="ResetPixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```csharp
private void ResetPixelFormat()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```csharp
private void ResetPreset()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRateControlMode` <a name="ResetRateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```csharp
private void ResetRateControlMode()
```

##### `ResetSdr` <a name="ResetSdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```csharp
private void ResetSdr()
```

##### `ResetVbvFullnessBits` <a name="ResetVbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```csharp
private void ResetVbvFullnessBits()
```

##### `ResetVbvSizeBits` <a name="ResetVbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```csharp
private void ResetVbvSizeBits()
```

##### `ResetWidthPixels` <a name="ResetWidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```csharp
private void ResetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">CrfLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">EntropyCoderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">GopDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">HeightPixelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">HlgInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">PixelFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">PresetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">RateControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">SdrInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">VbvFullnessBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">VbvSizeBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">WidthPixelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">CrfLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">EntropyCoder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">FrameRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">GopDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">HeightPixels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">PixelFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">Preset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">RateControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">VbvSizeBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">WidthPixels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hlg`<sup>Required</sup> <a name="Hlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference Hlg { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `Sdr`<sup>Required</sup> <a name="Sdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference Sdr { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```csharp
public double BitrateBpsInput { get; }
```

- *Type:* double

---

##### `CrfLevelInput`<sup>Optional</sup> <a name="CrfLevelInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```csharp
public double CrfLevelInput { get; }
```

- *Type:* double

---

##### `EntropyCoderInput`<sup>Optional</sup> <a name="EntropyCoderInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```csharp
public string EntropyCoderInput { get; }
```

- *Type:* string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```csharp
public double FrameRateInput { get; }
```

- *Type:* double

---

##### `GopDurationInput`<sup>Optional</sup> <a name="GopDurationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```csharp
public string GopDurationInput { get; }
```

- *Type:* string

---

##### `HeightPixelsInput`<sup>Optional</sup> <a name="HeightPixelsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```csharp
public double HeightPixelsInput { get; }
```

- *Type:* double

---

##### `HlgInput`<sup>Optional</sup> <a name="HlgInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg HlgInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PixelFormatInput`<sup>Optional</sup> <a name="PixelFormatInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```csharp
public string PixelFormatInput { get; }
```

- *Type:* string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```csharp
public string PresetInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RateControlModeInput`<sup>Optional</sup> <a name="RateControlModeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```csharp
public string RateControlModeInput { get; }
```

- *Type:* string

---

##### `SdrInput`<sup>Optional</sup> <a name="SdrInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr SdrInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `VbvFullnessBitsInput`<sup>Optional</sup> <a name="VbvFullnessBitsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```csharp
public double VbvFullnessBitsInput { get; }
```

- *Type:* double

---

##### `VbvSizeBitsInput`<sup>Optional</sup> <a name="VbvSizeBitsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```csharp
public double VbvSizeBitsInput { get; }
```

- *Type:* double

---

##### `WidthPixelsInput`<sup>Optional</sup> <a name="WidthPixelsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```csharp
public double WidthPixelsInput { get; }
```

- *Type:* double

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; }
```

- *Type:* double

---

##### `CrfLevel`<sup>Required</sup> <a name="CrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```csharp
public double CrfLevel { get; }
```

- *Type:* double

---

##### `EntropyCoder`<sup>Required</sup> <a name="EntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```csharp
public string EntropyCoder { get; }
```

- *Type:* string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```csharp
public double FrameRate { get; }
```

- *Type:* double

---

##### `GopDuration`<sup>Required</sup> <a name="GopDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```csharp
public string GopDuration { get; }
```

- *Type:* string

---

##### `HeightPixels`<sup>Required</sup> <a name="HeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```csharp
public double HeightPixels { get; }
```

- *Type:* double

---

##### `PixelFormat`<sup>Required</sup> <a name="PixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```csharp
public string PixelFormat { get; }
```

- *Type:* string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```csharp
public string Preset { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `RateControlMode`<sup>Required</sup> <a name="RateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```csharp
public string RateControlMode { get; }
```

- *Type:* string

---

##### `VbvFullnessBits`<sup>Required</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```csharp
public double VbvFullnessBits { get; }
```

- *Type:* double

---

##### `VbvSizeBits`<sup>Required</sup> <a name="VbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```csharp
public double VbvSizeBits { get; }
```

- *Type:* double

---

##### `WidthPixels`<sup>Required</sup> <a name="WidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```csharp
public double WidthPixels { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264">PutH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264">ResetH264</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutH264` <a name="PutH264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```csharp
private void PutH264(GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `ResetH264` <a name="ResetH264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```csharp
private void ResetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">H264Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `H264`<sup>Required</sup> <a name="H264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference H264 { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `H264Input`<sup>Optional</sup> <a name="H264Input" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 H264Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsAes128 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey">PutClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay">PutFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready">PutPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine">PutWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey">ResetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay">ResetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready">ResetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine">ResetWidevine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClearkey` <a name="PutClearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```csharp
private void PutClearkey(GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `PutFairplay` <a name="PutFairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```csharp
private void PutFairplay(GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PutPlayready` <a name="PutPlayready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```csharp
private void PutPlayready(GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `PutWidevine` <a name="PutWidevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```csharp
private void PutWidevine(GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `ResetClearkey` <a name="ResetClearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```csharp
private void ResetClearkey()
```

##### `ResetFairplay` <a name="ResetFairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```csharp
private void ResetFairplay()
```

##### `ResetPlayready` <a name="ResetPlayready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```csharp
private void ResetPlayready()
```

##### `ResetWidevine` <a name="ResetWidevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```csharp
private void ResetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">ClearkeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">FairplayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">PlayreadyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">WidevineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clearkey`<sup>Required</sup> <a name="Clearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference Clearkey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `Fairplay`<sup>Required</sup> <a name="Fairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference Fairplay { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `Playready`<sup>Required</sup> <a name="Playready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference Playready { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `Widevine`<sup>Required</sup> <a name="Widevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference Widevine { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `ClearkeyInput`<sup>Optional</sup> <a name="ClearkeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey ClearkeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `FairplayInput`<sup>Optional</sup> <a name="FairplayInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay FairplayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PlayreadyInput`<sup>Optional</sup> <a name="PlayreadyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready PlayreadyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `WidevineInput`<sup>Optional</sup> <a name="WidevineInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine WidevineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsList <a name="GoogleTranscoderJobTemplateConfigEncryptionsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigEncryptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putAes128">PutAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems">PutDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc">PutMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes">PutSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource">PutSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128">ResetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc">ResetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes">ResetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource">ResetSecretManagerKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAes128` <a name="PutAes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putAes128"></a>

```csharp
private void PutAes128(GoogleTranscoderJobTemplateConfigEncryptionsAes128 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `PutDrmSystems` <a name="PutDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems"></a>

```csharp
private void PutDrmSystems(GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `PutMpegCenc` <a name="PutMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc"></a>

```csharp
private void PutMpegCenc(GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `PutSampleAes` <a name="PutSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes"></a>

```csharp
private void PutSampleAes(GoogleTranscoderJobTemplateConfigEncryptionsSampleAes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `PutSecretManagerKeySource` <a name="PutSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```csharp
private void PutSecretManagerKeySource(GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `ResetAes128` <a name="ResetAes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128"></a>

```csharp
private void ResetAes128()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems"></a>

```csharp
private void ResetDrmSystems()
```

##### `ResetMpegCenc` <a name="ResetMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc"></a>

```csharp
private void ResetMpegCenc()
```

##### `ResetSampleAes` <a name="ResetSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes"></a>

```csharp
private void ResetSampleAes()
```

##### `ResetSecretManagerKeySource` <a name="ResetSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```csharp
private void ResetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference">GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input">Aes128Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput">MpegCencInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput">SampleAesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">SecretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aes128`<sup>Required</sup> <a name="Aes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference Aes128 { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference">GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference</a>

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference DrmSystems { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `MpegCenc`<sup>Required</sup> <a name="MpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference MpegCenc { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a>

---

##### `SampleAes`<sup>Required</sup> <a name="SampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference SampleAes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a>

---

##### `SecretManagerKeySource`<sup>Required</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference SecretManagerKeySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `Aes128Input`<sup>Optional</sup> <a name="Aes128Input" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsAes128 Aes128Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems DrmSystemsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MpegCencInput`<sup>Optional</sup> <a name="MpegCencInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc MpegCencInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `SampleAesInput`<sup>Optional</sup> <a name="SampleAesInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSampleAes SampleAesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `SecretManagerKeySourceInput`<sup>Optional</sup> <a name="SecretManagerKeySourceInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource SecretManagerKeySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSampleAes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---


### GoogleTranscoderJobTemplateConfigInputsList <a name="GoogleTranscoderJobTemplateConfigInputsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigInputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigInputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigInputsOutputReference <a name="GoogleTranscoderJobTemplateConfigInputsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigInputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigManifestsList <a name="GoogleTranscoderJobTemplateConfigManifestsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigManifestsOutputReference <a name="GoogleTranscoderJobTemplateConfigManifestsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams"></a>

```csharp
private void ResetMuxStreams()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams">MuxStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput"></a>

```csharp
public string[] MuxStreamsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams"></a>

```csharp
public string[] MuxStreams { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigMuxStreamsList <a name="GoogleTranscoderJobTemplateConfigMuxStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigMuxStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference <a name="GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings">PutSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId">ResetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings">ResetSegmentSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentSettings` <a name="PutSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```csharp
private void PutSegmentSettings(GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```csharp
private void ResetElementaryStreams()
```

##### `ResetEncryptionId` <a name="ResetEncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```csharp
private void ResetEncryptionId()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetSegmentSettings` <a name="ResetSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```csharp
private void ResetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput">EncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput">SegmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId">EncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentSettings`<sup>Required</sup> <a name="SegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```csharp
public GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference SegmentSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```csharp
public string[] ElementaryStreamsInput { get; }
```

- *Type:* string[]

---

##### `EncryptionIdInput`<sup>Optional</sup> <a name="EncryptionIdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```csharp
public string EncryptionIdInput { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SegmentSettingsInput`<sup>Optional</sup> <a name="SegmentSettingsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings SegmentSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```csharp
public string[] ElementaryStreams { get; }
```

- *Type:* string[]

---

##### `EncryptionId`<sup>Required</sup> <a name="EncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId"></a>

```csharp
public string EncryptionId { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference <a name="GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">ResetSegmentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentDuration` <a name="ResetSegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```csharp
private void ResetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">SegmentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">SegmentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentDurationInput`<sup>Optional</sup> <a name="SegmentDurationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```csharp
public string SegmentDurationInput { get; }
```

- *Type:* string

---

##### `SegmentDuration`<sup>Required</sup> <a name="SegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```csharp
public string SegmentDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---


### GoogleTranscoderJobTemplateConfigOutputOutputReference <a name="GoogleTranscoderJobTemplateConfigOutputOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">PutXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">ResetXy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXy` <a name="PutXy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```csharp
private void PutXy(GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```csharp
private void ResetEndTimeOffset()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```

##### `ResetXy` <a name="ResetXy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```csharp
private void ResetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">FadeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">XyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">FadeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Xy`<sup>Required</sup> <a name="Xy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference Xy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```csharp
public string EndTimeOffsetInput { get; }
```

- *Type:* string

---

##### `FadeTypeInput`<sup>Optional</sup> <a name="FadeTypeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```csharp
public string FadeTypeInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `XyInput`<sup>Optional</sup> <a name="XyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy XyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; }
```

- *Type:* string

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```csharp
public string FadeType { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```csharp
private void ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```csharp
private void ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">XInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">YInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">X</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">Y</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```csharp
public double XInput { get; }
```

- *Type:* double

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```csharp
public double YInput { get; }
```

- *Type:* double

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```csharp
public double X { get; }
```

- *Type:* double

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```csharp
public double Y { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsList <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade">PutAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade">ResetAnimationFade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimationFade` <a name="PutAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```csharp
private void PutAnimationFade(GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `ResetAnimationFade` <a name="ResetAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```csharp
private void ResetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput">AnimationFadeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnimationFade`<sup>Required</sup> <a name="AnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference AnimationFade { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `AnimationFadeInput`<sup>Optional</sup> <a name="AnimationFadeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade AnimationFadeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysList <a name="GoogleTranscoderJobTemplateConfigOverlaysList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.get"></a>

```csharp
private GoogleTranscoderJobTemplateConfigOverlaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigOverlaysOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigOverlaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putAnimations">PutAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations">ResetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimations` <a name="PutAnimations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putAnimations"></a>

```csharp
private void PutAnimations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* object

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putImage"></a>

```csharp
private void PutImage(GoogleTranscoderJobTemplateConfigOverlaysImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

---

##### `ResetAnimations` <a name="ResetAnimations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations"></a>

```csharp
private void ResetAnimations()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animations">Animations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList">GoogleTranscoderJobTemplateConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference">GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput">AnimationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Animations`<sup>Required</sup> <a name="Animations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animations"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysAnimationsList Animations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList">GoogleTranscoderJobTemplateConfigOverlaysAnimationsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.image"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference">GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference</a>

---

##### `AnimationsInput`<sup>Optional</sup> <a name="AnimationsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput"></a>

```csharp
public object AnimationsInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput"></a>

```csharp
public GoogleTranscoderJobTemplateConfigOverlaysImage ImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference <a name="GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue"></a>

```csharp
public GoogleTranscoderJobTemplateConfigPubsubDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

---


### GoogleTranscoderJobTemplateTimeoutsOutputReference <a name="GoogleTranscoderJobTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleTranscoderJobTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



