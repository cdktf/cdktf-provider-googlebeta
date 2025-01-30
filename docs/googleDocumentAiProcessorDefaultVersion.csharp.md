# `googleDocumentAiProcessorDefaultVersion` Submodule <a name="`googleDocumentAiProcessorDefaultVersion` Submodule" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiProcessorDefaultVersion <a name="GoogleDocumentAiProcessorDefaultVersion" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version google_document_ai_processor_default_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiProcessorDefaultVersion(Construct Scope, string Id, GoogleDocumentAiProcessorDefaultVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig">GoogleDocumentAiProcessorDefaultVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig">GoogleDocumentAiProcessorDefaultVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDocumentAiProcessorDefaultVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiProcessorDefaultVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiProcessorDefaultVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiProcessorDefaultVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiProcessorDefaultVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDocumentAiProcessorDefaultVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDocumentAiProcessorDefaultVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiProcessorDefaultVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference">GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processorInput">ProcessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processor">Processor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeouts"></a>

```csharp
public GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference">GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProcessorInput`<sup>Optional</sup> <a name="ProcessorInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processorInput"></a>

```csharp
public string ProcessorInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processor"></a>

```csharp
public string Processor { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiProcessorDefaultVersionConfig <a name="GoogleDocumentAiProcessorDefaultVersionConfig" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiProcessorDefaultVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Processor,
    string Version,
    string Id = null,
    GoogleDocumentAiProcessorDefaultVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.processor">Processor</a></code> | <code>string</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.version">Version</a></code> | <code>string</code> | The version to set. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.processor"></a>

```csharp
public string Processor { get; set; }
```

- *Type:* string

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#processor GoogleDocumentAiProcessorDefaultVersion#processor}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#version GoogleDocumentAiProcessorDefaultVersion#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.timeouts"></a>

```csharp
public GoogleDocumentAiProcessorDefaultVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#timeouts GoogleDocumentAiProcessorDefaultVersion#timeouts}

---

### GoogleDocumentAiProcessorDefaultVersionTimeouts <a name="GoogleDocumentAiProcessorDefaultVersionTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiProcessorDefaultVersionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference <a name="GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



