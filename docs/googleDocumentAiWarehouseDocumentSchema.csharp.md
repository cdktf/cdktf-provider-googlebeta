# `googleDocumentAiWarehouseDocumentSchema` Submodule <a name="`googleDocumentAiWarehouseDocumentSchema` Submodule" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiWarehouseDocumentSchema <a name="GoogleDocumentAiWarehouseDocumentSchema" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchema(Construct Scope, string Id, GoogleDocumentAiWarehouseDocumentSchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig">GoogleDocumentAiWarehouseDocumentSchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig">GoogleDocumentAiWarehouseDocumentSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.putPropertyDefinitions">PutPropertyDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetDocumentIsFolder">ResetDocumentIsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPropertyDefinitions` <a name="PutPropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.putPropertyDefinitions"></a>

```csharp
private void PutPropertyDefinitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.putPropertyDefinitions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDocumentAiWarehouseDocumentSchemaTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts">GoogleDocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `ResetDocumentIsFolder` <a name="ResetDocumentIsFolder" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetDocumentIsFolder"></a>

```csharp
private void ResetDocumentIsFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiWarehouseDocumentSchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiWarehouseDocumentSchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiWarehouseDocumentSchema.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDocumentAiWarehouseDocumentSchema.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDocumentAiWarehouseDocumentSchema to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDocumentAiWarehouseDocumentSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiWarehouseDocumentSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.propertyDefinitions">PropertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.documentIsFolderInput">DocumentIsFolderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.projectNumberInput">ProjectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput">PropertyDefinitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.documentIsFolder">DocumentIsFolder</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.propertyDefinitions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList PropertyDefinitions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.timeouts"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentIsFolderInput`<sup>Optional</sup> <a name="DocumentIsFolderInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.documentIsFolderInput"></a>

```csharp
public object DocumentIsFolderInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectNumberInput`<sup>Optional</sup> <a name="ProjectNumberInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.projectNumberInput"></a>

```csharp
public string ProjectNumberInput { get; }
```

- *Type:* string

---

##### `PropertyDefinitionsInput`<sup>Optional</sup> <a name="PropertyDefinitionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput"></a>

```csharp
public object PropertyDefinitionsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocumentIsFolder`<sup>Required</sup> <a name="DocumentIsFolder" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.documentIsFolder"></a>

```csharp
public object DocumentIsFolder { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiWarehouseDocumentSchemaConfig <a name="GoogleDocumentAiWarehouseDocumentSchemaConfig" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string ProjectNumber,
    object PropertyDefinitions,
    object DocumentIsFolder = null,
    string Id = null,
    GoogleDocumentAiWarehouseDocumentSchemaTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Name of the schema given by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.projectNumber">ProjectNumber</a></code> | <code>string</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions">PropertyDefinitions</a></code> | <code>object</code> | property_definitions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder">DocumentIsFolder</a></code> | <code>object</code> | Tells whether the document is a folder or a typical document. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#id GoogleDocumentAiWarehouseDocumentSchema#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts">GoogleDocumentAiWarehouseDocumentSchemaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Name of the schema given by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#display_name GoogleDocumentAiWarehouseDocumentSchema#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#location GoogleDocumentAiWarehouseDocumentSchema#location}

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.projectNumber"></a>

```csharp
public string ProjectNumber { get; set; }
```

- *Type:* string

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#project_number GoogleDocumentAiWarehouseDocumentSchema#project_number}

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions"></a>

```csharp
public object PropertyDefinitions { get; set; }
```

- *Type:* object

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#property_definitions GoogleDocumentAiWarehouseDocumentSchema#property_definitions}

---

##### `DocumentIsFolder`<sup>Optional</sup> <a name="DocumentIsFolder" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder"></a>

```csharp
public object DocumentIsFolder { get; set; }
```

- *Type:* object

Tells whether the document is a folder or a typical document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#document_is_folder GoogleDocumentAiWarehouseDocumentSchema#document_is_folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#id GoogleDocumentAiWarehouseDocumentSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaConfig.property.timeouts"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts">GoogleDocumentAiWarehouseDocumentSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#timeouts GoogleDocumentAiWarehouseDocumentSchema#timeouts}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions {
    string Name,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions = null,
    string DisplayName = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions EnumTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions FloatTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions = null,
    object IsFilterable = null,
    object IsMetadata = null,
    object IsRepeatable = null,
    object IsRequired = null,
    object IsSearchable = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions MapTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions PropertyTypeOptions = null,
    string RetrievalImportance = null,
    object SchemaSources = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions TextTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name">Name</a></code> | <code>string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName">DisplayName</a></code> | <code>string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable">IsFilterable</a></code> | <code>object</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata">IsMetadata</a></code> | <code>object</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired">IsRequired</a></code> | <code>object</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable">IsSearchable</a></code> | <code>object</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions">PropertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | property_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources">SchemaSources</a></code> | <code>object</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}

---

##### `DateTimeTypeOptions`<sup>Optional</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#date_time_type_options GoogleDocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#display_name GoogleDocumentAiWarehouseDocumentSchema#display_name}

---

##### `EnumTypeOptions`<sup>Optional</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions EnumTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#enum_type_options GoogleDocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `FloatTypeOptions`<sup>Optional</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions FloatTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#float_type_options GoogleDocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `IntegerTypeOptions`<sup>Optional</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#integer_type_options GoogleDocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `IsFilterable`<sup>Optional</sup> <a name="IsFilterable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable"></a>

```csharp
public object IsFilterable { get; set; }
```

- *Type:* object

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_filterable GoogleDocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `IsMetadata`<sup>Optional</sup> <a name="IsMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata"></a>

```csharp
public object IsMetadata { get; set; }
```

- *Type:* object

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_metadata GoogleDocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `IsRepeatable`<sup>Optional</sup> <a name="IsRepeatable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; set; }
```

- *Type:* object

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_repeatable GoogleDocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired"></a>

```csharp
public object IsRequired { get; set; }
```

- *Type:* object

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_required GoogleDocumentAiWarehouseDocumentSchema#is_required}

---

##### `IsSearchable`<sup>Optional</sup> <a name="IsSearchable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable"></a>

```csharp
public object IsSearchable { get; set; }
```

- *Type:* object

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_searchable GoogleDocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `MapTypeOptions`<sup>Optional</sup> <a name="MapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions MapTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#map_type_options GoogleDocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `PropertyTypeOptions`<sup>Optional</sup> <a name="PropertyTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions PropertyTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

property_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#property_type_options GoogleDocumentAiWarehouseDocumentSchema#property_type_options}

---

##### `RetrievalImportance`<sup>Optional</sup> <a name="RetrievalImportance" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; set; }
```

- *Type:* string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#retrieval_importance GoogleDocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `SchemaSources`<sup>Optional</sup> <a name="SchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources"></a>

```csharp
public object SchemaSources { get; set; }
```

- *Type:* object

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#schema_sources GoogleDocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `TextTypeOptions`<sup>Optional</sup> <a name="TextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions TextTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#text_type_options GoogleDocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `TimestampTypeOptions`<sup>Optional</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#timestamp_type_options GoogleDocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions {
    string[] PossibleValues,
    object ValidationCheckDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; set; }
```

- *Type:* string[]

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#possible_values GoogleDocumentAiWarehouseDocumentSchema#possible_values}

---

##### `ValidationCheckDisabled`<sup>Optional</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; set; }
```

- *Type:* object

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#validation_check_disabled GoogleDocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions {
    object PropertyDefinitions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions">PropertyDefinitions</a></code> | <code>object</code> | property_definitions block. |

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions"></a>

```csharp
public object PropertyDefinitions { get; set; }
```

- *Type:* object

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#property_definitions GoogleDocumentAiWarehouseDocumentSchema#property_definitions}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions {
    string Name,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions = null,
    string DisplayName = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions EnumTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions FloatTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions = null,
    object IsFilterable = null,
    object IsMetadata = null,
    object IsRepeatable = null,
    object IsRequired = null,
    object IsSearchable = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions MapTypeOptions = null,
    string RetrievalImportance = null,
    object SchemaSources = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions TextTypeOptions = null,
    GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name">Name</a></code> | <code>string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName">DisplayName</a></code> | <code>string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable">IsFilterable</a></code> | <code>object</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata">IsMetadata</a></code> | <code>object</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired">IsRequired</a></code> | <code>object</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable">IsSearchable</a></code> | <code>object</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources">SchemaSources</a></code> | <code>object</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}

---

##### `DateTimeTypeOptions`<sup>Optional</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#date_time_type_options GoogleDocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#display_name GoogleDocumentAiWarehouseDocumentSchema#display_name}

---

##### `EnumTypeOptions`<sup>Optional</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions EnumTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#enum_type_options GoogleDocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `FloatTypeOptions`<sup>Optional</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions FloatTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#float_type_options GoogleDocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `IntegerTypeOptions`<sup>Optional</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions IntegerTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#integer_type_options GoogleDocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `IsFilterable`<sup>Optional</sup> <a name="IsFilterable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable"></a>

```csharp
public object IsFilterable { get; set; }
```

- *Type:* object

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_filterable GoogleDocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `IsMetadata`<sup>Optional</sup> <a name="IsMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata"></a>

```csharp
public object IsMetadata { get; set; }
```

- *Type:* object

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_metadata GoogleDocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `IsRepeatable`<sup>Optional</sup> <a name="IsRepeatable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; set; }
```

- *Type:* object

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_repeatable GoogleDocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired"></a>

```csharp
public object IsRequired { get; set; }
```

- *Type:* object

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_required GoogleDocumentAiWarehouseDocumentSchema#is_required}

---

##### `IsSearchable`<sup>Optional</sup> <a name="IsSearchable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable"></a>

```csharp
public object IsSearchable { get; set; }
```

- *Type:* object

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#is_searchable GoogleDocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `MapTypeOptions`<sup>Optional</sup> <a name="MapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions MapTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#map_type_options GoogleDocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `RetrievalImportance`<sup>Optional</sup> <a name="RetrievalImportance" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; set; }
```

- *Type:* string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#retrieval_importance GoogleDocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `SchemaSources`<sup>Optional</sup> <a name="SchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources"></a>

```csharp
public object SchemaSources { get; set; }
```

- *Type:* object

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#schema_sources GoogleDocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `TextTypeOptions`<sup>Optional</sup> <a name="TextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions TextTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#text_type_options GoogleDocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `TimestampTypeOptions`<sup>Optional</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions TimestampTypeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#timestamp_type_options GoogleDocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions {
    string[] PossibleValues,
    object ValidationCheckDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; set; }
```

- *Type:* string[]

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#possible_values GoogleDocumentAiWarehouseDocumentSchema#possible_values}

---

##### `ValidationCheckDisabled`<sup>Optional</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; set; }
```

- *Type:* object

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#validation_check_disabled GoogleDocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources {
    string Name = null,
    string ProcessorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name">Name</a></code> | <code>string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType">ProcessorType</a></code> | <code>string</code> | The Doc AI processor type name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}

---

##### `ProcessorType`<sup>Optional</sup> <a name="ProcessorType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType"></a>

```csharp
public string ProcessorType { get; set; }
```

- *Type:* string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#processor_type GoogleDocumentAiWarehouseDocumentSchema#processor_type}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources {
    string Name = null,
    string ProcessorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name">Name</a></code> | <code>string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType">ProcessorType</a></code> | <code>string</code> | The Doc AI processor type name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}

---

##### `ProcessorType`<sup>Optional</sup> <a name="ProcessorType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType"></a>

```csharp
public string ProcessorType { get; set; }
```

- *Type:* string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#processor_type GoogleDocumentAiWarehouseDocumentSchema#processor_type}

---

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions {

};
```


### GoogleDocumentAiWarehouseDocumentSchemaTimeouts <a name="GoogleDocumentAiWarehouseDocumentSchemaTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#create GoogleDocumentAiWarehouseDocumentSchema#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#delete GoogleDocumentAiWarehouseDocumentSchema#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#create GoogleDocumentAiWarehouseDocumentSchema#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_document_ai_warehouse_document_schema#delete GoogleDocumentAiWarehouseDocumentSchema#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">ResetValidationCheckDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidationCheckDisabled` <a name="ResetValidationCheckDisabled" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```csharp
private void ResetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">PossibleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">ValidationCheckDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PossibleValuesInput`<sup>Optional</sup> <a name="PossibleValuesInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```csharp
public string[] PossibleValuesInput { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabledInput`<sup>Optional</sup> <a name="ValidationCheckDisabledInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```csharp
public object ValidationCheckDisabledInput { get; }
```

- *Type:* object

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabled`<sup>Required</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get"></a>

```csharp
private GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions">PutDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions">PutEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions">PutFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions">PutIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions">PutMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions">PutPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources">PutSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions">PutTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions">PutTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">ResetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions">ResetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions">ResetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions">ResetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable">ResetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata">ResetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable">ResetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable">ResetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions">ResetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions">ResetPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance">ResetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources">ResetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions">ResetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions">ResetTimestampTypeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeTypeOptions` <a name="PutDateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```csharp
private void PutDateTimeTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `PutEnumTypeOptions` <a name="PutEnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```csharp
private void PutEnumTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `PutFloatTypeOptions` <a name="PutFloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```csharp
private void PutFloatTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `PutIntegerTypeOptions` <a name="PutIntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```csharp
private void PutIntegerTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `PutMapTypeOptions` <a name="PutMapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```csharp
private void PutMapTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `PutPropertyTypeOptions` <a name="PutPropertyTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions"></a>

```csharp
private void PutPropertyTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `PutSchemaSources` <a name="PutSchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources"></a>

```csharp
private void PutSchemaSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* object

---

##### `PutTextTypeOptions` <a name="PutTextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```csharp
private void PutTextTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `PutTimestampTypeOptions` <a name="PutTimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```csharp
private void PutTimestampTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `ResetDateTimeTypeOptions` <a name="ResetDateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```csharp
private void ResetDateTimeTypeOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnumTypeOptions` <a name="ResetEnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```csharp
private void ResetEnumTypeOptions()
```

##### `ResetFloatTypeOptions` <a name="ResetFloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```csharp
private void ResetFloatTypeOptions()
```

##### `ResetIntegerTypeOptions` <a name="ResetIntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```csharp
private void ResetIntegerTypeOptions()
```

##### `ResetIsFilterable` <a name="ResetIsFilterable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```csharp
private void ResetIsFilterable()
```

##### `ResetIsMetadata` <a name="ResetIsMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```csharp
private void ResetIsMetadata()
```

##### `ResetIsRepeatable` <a name="ResetIsRepeatable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```csharp
private void ResetIsRepeatable()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired"></a>

```csharp
private void ResetIsRequired()
```

##### `ResetIsSearchable` <a name="ResetIsSearchable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```csharp
private void ResetIsSearchable()
```

##### `ResetMapTypeOptions` <a name="ResetMapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```csharp
private void ResetMapTypeOptions()
```

##### `ResetPropertyTypeOptions` <a name="ResetPropertyTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions"></a>

```csharp
private void ResetPropertyTypeOptions()
```

##### `ResetRetrievalImportance` <a name="ResetRetrievalImportance" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```csharp
private void ResetRetrievalImportance()
```

##### `ResetSchemaSources` <a name="ResetSchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```csharp
private void ResetSchemaSources()
```

##### `ResetTextTypeOptions` <a name="ResetTextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```csharp
private void ResetTextTypeOptions()
```

##### `ResetTimestampTypeOptions` <a name="ResetTimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```csharp
private void ResetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions">PropertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources">SchemaSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">DateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">EnumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">FloatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">IntegerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput">IsFilterableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput">IsMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput">IsRepeatableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput">IsSearchableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">MapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput">PropertyTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput">RetrievalImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput">SchemaSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput">TextTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">TimestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable">IsFilterable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata">IsMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired">IsRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable">IsSearchable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateTimeTypeOptions`<sup>Required</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference DateTimeTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `EnumTypeOptions`<sup>Required</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference EnumTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `FloatTypeOptions`<sup>Required</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference FloatTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `IntegerTypeOptions`<sup>Required</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference IntegerTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `MapTypeOptions`<sup>Required</sup> <a name="MapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference MapTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `PropertyTypeOptions`<sup>Required</sup> <a name="PropertyTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference PropertyTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a>

---

##### `SchemaSources`<sup>Required</sup> <a name="SchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList SchemaSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a>

---

##### `TextTypeOptions`<sup>Required</sup> <a name="TextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference TextTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `TimestampTypeOptions`<sup>Required</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference TimestampTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `DateTimeTypeOptionsInput`<sup>Optional</sup> <a name="DateTimeTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnumTypeOptionsInput`<sup>Optional</sup> <a name="EnumTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions EnumTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `FloatTypeOptionsInput`<sup>Optional</sup> <a name="FloatTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions FloatTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `IntegerTypeOptionsInput`<sup>Optional</sup> <a name="IntegerTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions IntegerTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `IsFilterableInput`<sup>Optional</sup> <a name="IsFilterableInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```csharp
public object IsFilterableInput { get; }
```

- *Type:* object

---

##### `IsMetadataInput`<sup>Optional</sup> <a name="IsMetadataInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```csharp
public object IsMetadataInput { get; }
```

- *Type:* object

---

##### `IsRepeatableInput`<sup>Optional</sup> <a name="IsRepeatableInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```csharp
public object IsRepeatableInput { get; }
```

- *Type:* object

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```csharp
public object IsRequiredInput { get; }
```

- *Type:* object

---

##### `IsSearchableInput`<sup>Optional</sup> <a name="IsSearchableInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```csharp
public object IsSearchableInput { get; }
```

- *Type:* object

---

##### `MapTypeOptionsInput`<sup>Optional</sup> <a name="MapTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions MapTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertyTypeOptionsInput`<sup>Optional</sup> <a name="PropertyTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions PropertyTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `RetrievalImportanceInput`<sup>Optional</sup> <a name="RetrievalImportanceInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```csharp
public string RetrievalImportanceInput { get; }
```

- *Type:* string

---

##### `SchemaSourcesInput`<sup>Optional</sup> <a name="SchemaSourcesInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```csharp
public object SchemaSourcesInput { get; }
```

- *Type:* object

---

##### `TextTypeOptionsInput`<sup>Optional</sup> <a name="TextTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions TextTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `TimestampTypeOptionsInput`<sup>Optional</sup> <a name="TimestampTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions TimestampTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsFilterable`<sup>Required</sup> <a name="IsFilterable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable"></a>

```csharp
public object IsFilterable { get; }
```

- *Type:* object

---

##### `IsMetadata`<sup>Required</sup> <a name="IsMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata"></a>

```csharp
public object IsMetadata { get; }
```

- *Type:* object

---

##### `IsRepeatable`<sup>Required</sup> <a name="IsRepeatable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; }
```

- *Type:* object

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired"></a>

```csharp
public object IsRequired { get; }
```

- *Type:* object

---

##### `IsSearchable`<sup>Required</sup> <a name="IsSearchable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable"></a>

```csharp
public object IsSearchable { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetrievalImportance`<sup>Required</sup> <a name="RetrievalImportance" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions">PutPropertyDefinitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyDefinitions` <a name="PutPropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions"></a>

```csharp
private void PutPropertyDefinitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions">PropertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput">PropertyDefinitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList PropertyDefinitions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a>

---

##### `PropertyDefinitionsInput`<sup>Optional</sup> <a name="PropertyDefinitionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput"></a>

```csharp
public object PropertyDefinitionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">ResetValidationCheckDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidationCheckDisabled` <a name="ResetValidationCheckDisabled" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```csharp
private void ResetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">PossibleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">ValidationCheckDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PossibleValuesInput`<sup>Optional</sup> <a name="PossibleValuesInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```csharp
public string[] PossibleValuesInput { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabledInput`<sup>Optional</sup> <a name="ValidationCheckDisabledInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```csharp
public object ValidationCheckDisabledInput { get; }
```

- *Type:* object

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `ValidationCheckDisabled`<sup>Required</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```csharp
public object ValidationCheckDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get"></a>

```csharp
private GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions">PutDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions">PutEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions">PutFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions">PutIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions">PutMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources">PutSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions">PutTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions">PutTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">ResetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions">ResetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions">ResetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions">ResetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable">ResetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata">ResetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable">ResetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable">ResetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions">ResetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance">ResetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources">ResetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions">ResetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions">ResetTimestampTypeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeTypeOptions` <a name="PutDateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```csharp
private void PutDateTimeTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `PutEnumTypeOptions` <a name="PutEnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```csharp
private void PutEnumTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `PutFloatTypeOptions` <a name="PutFloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```csharp
private void PutFloatTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `PutIntegerTypeOptions` <a name="PutIntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```csharp
private void PutIntegerTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `PutMapTypeOptions` <a name="PutMapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```csharp
private void PutMapTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `PutSchemaSources` <a name="PutSchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources"></a>

```csharp
private void PutSchemaSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* object

---

##### `PutTextTypeOptions` <a name="PutTextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```csharp
private void PutTextTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `PutTimestampTypeOptions` <a name="PutTimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```csharp
private void PutTimestampTypeOptions(GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `ResetDateTimeTypeOptions` <a name="ResetDateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```csharp
private void ResetDateTimeTypeOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnumTypeOptions` <a name="ResetEnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```csharp
private void ResetEnumTypeOptions()
```

##### `ResetFloatTypeOptions` <a name="ResetFloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```csharp
private void ResetFloatTypeOptions()
```

##### `ResetIntegerTypeOptions` <a name="ResetIntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```csharp
private void ResetIntegerTypeOptions()
```

##### `ResetIsFilterable` <a name="ResetIsFilterable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```csharp
private void ResetIsFilterable()
```

##### `ResetIsMetadata` <a name="ResetIsMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```csharp
private void ResetIsMetadata()
```

##### `ResetIsRepeatable` <a name="ResetIsRepeatable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```csharp
private void ResetIsRepeatable()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired"></a>

```csharp
private void ResetIsRequired()
```

##### `ResetIsSearchable` <a name="ResetIsSearchable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```csharp
private void ResetIsSearchable()
```

##### `ResetMapTypeOptions` <a name="ResetMapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```csharp
private void ResetMapTypeOptions()
```

##### `ResetRetrievalImportance` <a name="ResetRetrievalImportance" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```csharp
private void ResetRetrievalImportance()
```

##### `ResetSchemaSources` <a name="ResetSchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```csharp
private void ResetSchemaSources()
```

##### `ResetTextTypeOptions` <a name="ResetTextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```csharp
private void ResetTextTypeOptions()
```

##### `ResetTimestampTypeOptions` <a name="ResetTimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```csharp
private void ResetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources">SchemaSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">DateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">EnumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">FloatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">IntegerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput">IsFilterableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput">IsMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput">IsRepeatableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput">IsSearchableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">MapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput">RetrievalImportanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput">SchemaSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput">TextTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">TimestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable">IsFilterable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata">IsMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable">IsRepeatable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired">IsRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable">IsSearchable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance">RetrievalImportance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateTimeTypeOptions`<sup>Required</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference DateTimeTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `EnumTypeOptions`<sup>Required</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference EnumTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `FloatTypeOptions`<sup>Required</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference FloatTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `IntegerTypeOptions`<sup>Required</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference IntegerTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `MapTypeOptions`<sup>Required</sup> <a name="MapTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference MapTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `SchemaSources`<sup>Required</sup> <a name="SchemaSources" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList SchemaSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a>

---

##### `TextTypeOptions`<sup>Required</sup> <a name="TextTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference TextTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `TimestampTypeOptions`<sup>Required</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference TimestampTypeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `DateTimeTypeOptionsInput`<sup>Optional</sup> <a name="DateTimeTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions DateTimeTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnumTypeOptionsInput`<sup>Optional</sup> <a name="EnumTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions EnumTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `FloatTypeOptionsInput`<sup>Optional</sup> <a name="FloatTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions FloatTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `IntegerTypeOptionsInput`<sup>Optional</sup> <a name="IntegerTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions IntegerTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `IsFilterableInput`<sup>Optional</sup> <a name="IsFilterableInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```csharp
public object IsFilterableInput { get; }
```

- *Type:* object

---

##### `IsMetadataInput`<sup>Optional</sup> <a name="IsMetadataInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```csharp
public object IsMetadataInput { get; }
```

- *Type:* object

---

##### `IsRepeatableInput`<sup>Optional</sup> <a name="IsRepeatableInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```csharp
public object IsRepeatableInput { get; }
```

- *Type:* object

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```csharp
public object IsRequiredInput { get; }
```

- *Type:* object

---

##### `IsSearchableInput`<sup>Optional</sup> <a name="IsSearchableInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```csharp
public object IsSearchableInput { get; }
```

- *Type:* object

---

##### `MapTypeOptionsInput`<sup>Optional</sup> <a name="MapTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions MapTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetrievalImportanceInput`<sup>Optional</sup> <a name="RetrievalImportanceInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```csharp
public string RetrievalImportanceInput { get; }
```

- *Type:* string

---

##### `SchemaSourcesInput`<sup>Optional</sup> <a name="SchemaSourcesInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```csharp
public object SchemaSourcesInput { get; }
```

- *Type:* object

---

##### `TextTypeOptionsInput`<sup>Optional</sup> <a name="TextTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions TextTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `TimestampTypeOptionsInput`<sup>Optional</sup> <a name="TimestampTypeOptionsInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions TimestampTypeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsFilterable`<sup>Required</sup> <a name="IsFilterable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable"></a>

```csharp
public object IsFilterable { get; }
```

- *Type:* object

---

##### `IsMetadata`<sup>Required</sup> <a name="IsMetadata" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata"></a>

```csharp
public object IsMetadata { get; }
```

- *Type:* object

---

##### `IsRepeatable`<sup>Required</sup> <a name="IsRepeatable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```csharp
public object IsRepeatable { get; }
```

- *Type:* object

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired"></a>

```csharp
public object IsRequired { get; }
```

- *Type:* object

---

##### `IsSearchable`<sup>Required</sup> <a name="IsSearchable" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable"></a>

```csharp
public object IsSearchable { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetrievalImportance`<sup>Required</sup> <a name="RetrievalImportance" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```csharp
public string RetrievalImportance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get"></a>

```csharp
private GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">ResetProcessorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProcessorType` <a name="ResetProcessorType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```csharp
private void ResetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">ProcessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```csharp
public string ProcessorTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```csharp
public string ProcessorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get"></a>

```csharp
private GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">ResetProcessorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProcessorType` <a name="ResetProcessorType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```csharp
private void ResetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">ProcessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```csharp
public string ProcessorTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```csharp
public string ProcessorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---


### GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference <a name="GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDocumentAiWarehouseDocumentSchema.GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



