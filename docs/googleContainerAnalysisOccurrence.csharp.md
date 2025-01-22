# `googleContainerAnalysisOccurrence` Submodule <a name="`googleContainerAnalysisOccurrence` Submodule" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisOccurrence <a name="GoogleContainerAnalysisOccurrence" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrence(Construct Scope, string Id, GoogleContainerAnalysisOccurrenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig">GoogleContainerAnalysisOccurrenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig">GoogleContainerAnalysisOccurrenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation">PutAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetRemediation">ResetRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestation` <a name="PutAttestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation"></a>

```csharp
private void PutAttestation(GoogleContainerAnalysisOccurrenceAttestation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContainerAnalysisOccurrenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRemediation` <a name="ResetRemediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetRemediation"></a>

```csharp
private void ResetRemediation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAnalysisOccurrence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAnalysisOccurrence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAnalysisOccurrence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAnalysisOccurrence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAnalysisOccurrence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAnalysisOccurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisOccurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestation">Attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference">GoogleContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference">GoogleContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestationInput">AttestationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteNameInput">NoteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediationInput">RemediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUriInput">ResourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteName">NoteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediation">Remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUri">ResourceUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestation"></a>

```csharp
public GoogleContainerAnalysisOccurrenceAttestationOutputReference Attestation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference">GoogleContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeouts"></a>

```csharp
public GoogleContainerAnalysisOccurrenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference">GoogleContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AttestationInput`<sup>Optional</sup> <a name="AttestationInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestationInput"></a>

```csharp
public GoogleContainerAnalysisOccurrenceAttestation AttestationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NoteNameInput`<sup>Optional</sup> <a name="NoteNameInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteNameInput"></a>

```csharp
public string NoteNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RemediationInput`<sup>Optional</sup> <a name="RemediationInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediationInput"></a>

```csharp
public string RemediationInput { get; }
```

- *Type:* string

---

##### `ResourceUriInput`<sup>Optional</sup> <a name="ResourceUriInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUriInput"></a>

```csharp
public string ResourceUriInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NoteName`<sup>Required</sup> <a name="NoteName" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteName"></a>

```csharp
public string NoteName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediation"></a>

```csharp
public string Remediation { get; }
```

- *Type:* string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUri"></a>

```csharp
public string ResourceUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisOccurrenceAttestation <a name="GoogleContainerAnalysisOccurrenceAttestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceAttestation {
    string SerializedPayload,
    object Signatures
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.serializedPayload">SerializedPayload</a></code> | <code>string</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.signatures">Signatures</a></code> | <code>object</code> | signatures block. |

---

##### `SerializedPayload`<sup>Required</sup> <a name="SerializedPayload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```csharp
public string SerializedPayload { get; set; }
```

- *Type:* string

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#serialized_payload GoogleContainerAnalysisOccurrence#serialized_payload}

---

##### `Signatures`<sup>Required</sup> <a name="Signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```csharp
public object Signatures { get; set; }
```

- *Type:* object

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#signatures GoogleContainerAnalysisOccurrence#signatures}

---

### GoogleContainerAnalysisOccurrenceAttestationSignatures <a name="GoogleContainerAnalysisOccurrenceAttestationSignatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceAttestationSignatures {
    string PublicKeyId,
    string Signature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.signature">Signature</a></code> | <code>string</code> | The content of the signature, an opaque bytestring. |

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; set; }
```

- *Type:* string

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.

  * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):

  * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#public_key_id GoogleContainerAnalysisOccurrence#public_key_id}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#signature GoogleContainerAnalysisOccurrence#signature}

---

### GoogleContainerAnalysisOccurrenceConfig <a name="GoogleContainerAnalysisOccurrenceConfig" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleContainerAnalysisOccurrenceAttestation Attestation,
    string NoteName,
    string ResourceUri,
    string Id = null,
    string Project = null,
    string Remediation = null,
    GoogleContainerAnalysisOccurrenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.attestation">Attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.noteName">NoteName</a></code> | <code>string</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.resourceUri">ResourceUri</a></code> | <code>string</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.remediation">Remediation</a></code> | <code>string</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.attestation"></a>

```csharp
public GoogleContainerAnalysisOccurrenceAttestation Attestation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#attestation GoogleContainerAnalysisOccurrence#attestation}

---

##### `NoteName`<sup>Required</sup> <a name="NoteName" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.noteName"></a>

```csharp
public string NoteName { get; set; }
```

- *Type:* string

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#note_name GoogleContainerAnalysisOccurrence#note_name}

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```csharp
public string ResourceUri { get; set; }
```

- *Type:* string

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#resource_uri GoogleContainerAnalysisOccurrence#resource_uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}.

---

##### `Remediation`<sup>Optional</sup> <a name="Remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.remediation"></a>

```csharp
public string Remediation { get; set; }
```

- *Type:* string

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#remediation GoogleContainerAnalysisOccurrence#remediation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```csharp
public GoogleContainerAnalysisOccurrenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#timeouts GoogleContainerAnalysisOccurrence#timeouts}

---

### GoogleContainerAnalysisOccurrenceTimeouts <a name="GoogleContainerAnalysisOccurrenceTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisOccurrenceAttestationOutputReference <a name="GoogleContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceAttestationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">PutSignatures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignatures` <a name="PutSignatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```csharp
private void PutSignatures(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">Signatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList">GoogleContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">SerializedPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">SignaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">SerializedPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Signatures`<sup>Required</sup> <a name="Signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```csharp
public GoogleContainerAnalysisOccurrenceAttestationSignaturesList Signatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList">GoogleContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `SerializedPayloadInput`<sup>Optional</sup> <a name="SerializedPayloadInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```csharp
public string SerializedPayloadInput { get; }
```

- *Type:* string

---

##### `SignaturesInput`<sup>Optional</sup> <a name="SignaturesInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```csharp
public object SignaturesInput { get; }
```

- *Type:* object

---

##### `SerializedPayload`<sup>Required</sup> <a name="SerializedPayload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```csharp
public string SerializedPayload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAnalysisOccurrenceAttestation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---


### GoogleContainerAnalysisOccurrenceAttestationSignaturesList <a name="GoogleContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceAttestationSignaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```csharp
private GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">ResetSignature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```csharp
private void ResetSignature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">PublicKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyIdInput`<sup>Optional</sup> <a name="PublicKeyIdInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```csharp
public string PublicKeyIdInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAnalysisOccurrenceTimeoutsOutputReference <a name="GoogleContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAnalysisOccurrenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



