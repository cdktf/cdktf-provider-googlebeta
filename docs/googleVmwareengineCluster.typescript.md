# `googleVmwareengineCluster` Submodule <a name="`googleVmwareengineCluster` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineCluster <a name="GoogleVmwareengineCluster" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster google_vmwareengine_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineCluster(scope: Construct, id: string, config: GoogleVmwareengineClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig">GoogleVmwareengineClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig">GoogleVmwareengineClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings">putAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putNodeTypeConfigs">putNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetAutoscalingSettings">resetAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetNodeTypeConfigs">resetNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingSettings` <a name="putAutoscalingSettings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings"></a>

```typescript
public putAutoscalingSettings(value: GoogleVmwareengineClusterAutoscalingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

---

##### `putNodeTypeConfigs` <a name="putNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putNodeTypeConfigs"></a>

```typescript
public putNodeTypeConfigs(value: IResolvable | GoogleVmwareengineClusterNodeTypeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putNodeTypeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVmwareengineClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>

---

##### `resetAutoscalingSettings` <a name="resetAutoscalingSettings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetAutoscalingSettings"></a>

```typescript
public resetAutoscalingSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeTypeConfigs` <a name="resetNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetNodeTypeConfigs"></a>

```typescript
public resetNodeTypeConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVmwareengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVmwareengineCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVmwareengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.management">management</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList">GoogleVmwareengineClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference">GoogleVmwareengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettingsInput">autoscalingSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigsInput">nodeTypeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingSettings`<sup>Required</sup> <a name="autoscalingSettings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettings"></a>

```typescript
public readonly autoscalingSettings: GoogleVmwareengineClusterAutoscalingSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsOutputReference</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.management"></a>

```typescript
public readonly management: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nodeTypeConfigs`<sup>Required</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigs"></a>

```typescript
public readonly nodeTypeConfigs: GoogleVmwareengineClusterNodeTypeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList">GoogleVmwareengineClusterNodeTypeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference">GoogleVmwareengineClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `autoscalingSettingsInput`<sup>Optional</sup> <a name="autoscalingSettingsInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettingsInput"></a>

```typescript
public readonly autoscalingSettingsInput: GoogleVmwareengineClusterAutoscalingSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeTypeConfigsInput`<sup>Optional</sup> <a name="nodeTypeConfigsInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigsInput"></a>

```typescript
public readonly nodeTypeConfigsInput: IResolvable | GoogleVmwareengineClusterNodeTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVmwareengineClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineClusterAutoscalingSettings <a name="GoogleVmwareengineClusterAutoscalingSettings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterAutoscalingSettings: googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.autoscalingPolicies">autoscalingPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]</code> | autoscaling_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | The minimum duration between consecutive autoscale operations. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount">maxClusterNodeCount</a></code> | <code>number</code> | Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.minClusterNodeCount">minClusterNodeCount</a></code> | <code>number</code> | Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |

---

##### `autoscalingPolicies`<sup>Required</sup> <a name="autoscalingPolicies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.autoscalingPolicies"></a>

```typescript
public readonly autoscalingPolicies: IResolvable | GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]

autoscaling_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#autoscaling_policies GoogleVmwareengineCluster#autoscaling_policies}

---

##### `coolDownPeriod`<sup>Optional</sup> <a name="coolDownPeriod" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

The minimum duration between consecutive autoscale operations.

It starts once addition or removal of nodes is fully completed.
Minimum cool down period is 30m.
Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#cool_down_period GoogleVmwareengineCluster#cool_down_period}

---

##### `maxClusterNodeCount`<sup>Optional</sup> <a name="maxClusterNodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount"></a>

```typescript
public readonly maxClusterNodeCount: number;
```

- *Type:* number

Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#max_cluster_node_count GoogleVmwareengineCluster#max_cluster_node_count}

---

##### `minClusterNodeCount`<sup>Optional</sup> <a name="minClusterNodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.minClusterNodeCount"></a>

```typescript
public readonly minClusterNodeCount: number;
```

- *Type:* number

Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#min_cluster_node_count GoogleVmwareengineCluster#min_cluster_node_count}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies: googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId">autoscalePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#autoscale_policy_id GoogleVmwareengineCluster#autoscale_policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | The canonical identifier of the node type to add or remove. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize">scaleOutSize</a></code> | <code>number</code> | Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds">consumedMemoryThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | consumed_memory_thresholds block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds">cpuThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | cpu_thresholds block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds">storageThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | storage_thresholds block. |

---

##### `autoscalePolicyId`<sup>Required</sup> <a name="autoscalePolicyId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId"></a>

```typescript
public readonly autoscalePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#autoscale_policy_id GoogleVmwareengineCluster#autoscale_policy_id}.

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

The canonical identifier of the node type to add or remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#node_type_id GoogleVmwareengineCluster#node_type_id}

---

##### `scaleOutSize`<sup>Required</sup> <a name="scaleOutSize" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize"></a>

```typescript
public readonly scaleOutSize: number;
```

- *Type:* number

Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_out_size GoogleVmwareengineCluster#scale_out_size}

---

##### `consumedMemoryThresholds`<sup>Optional</sup> <a name="consumedMemoryThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds"></a>

```typescript
public readonly consumedMemoryThresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

consumed_memory_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#consumed_memory_thresholds GoogleVmwareengineCluster#consumed_memory_thresholds}

---

##### `cpuThresholds`<sup>Optional</sup> <a name="cpuThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds"></a>

```typescript
public readonly cpuThresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

cpu_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#cpu_thresholds GoogleVmwareengineCluster#cpu_thresholds}

---

##### `storageThresholds`<sup>Optional</sup> <a name="storageThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds"></a>

```typescript
public readonly storageThresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

storage_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#storage_thresholds GoogleVmwareengineCluster#storage_thresholds}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds: googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn">scaleIn</a></code> | <code>number</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut">scaleOut</a></code> | <code>number</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds: googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn">scaleIn</a></code> | <code>number</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut">scaleOut</a></code> | <code>number</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds: googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn">scaleIn</a></code> | <code>number</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut">scaleOut</a></code> | <code>number</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

### GoogleVmwareengineClusterConfig <a name="GoogleVmwareengineClusterConfig" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterConfig: googleVmwareengineCluster.GoogleVmwareengineClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.name">name</a></code> | <code>string</code> | The ID of the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.autoscalingSettings">autoscalingSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#id GoogleVmwareengineCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]</code> | node_type_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#name GoogleVmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#parent GoogleVmwareengineCluster#parent}

---

##### `autoscalingSettings`<sup>Optional</sup> <a name="autoscalingSettings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.autoscalingSettings"></a>

```typescript
public readonly autoscalingSettings: GoogleVmwareengineClusterAutoscalingSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#autoscaling_settings GoogleVmwareengineCluster#autoscaling_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#id GoogleVmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeTypeConfigs`<sup>Optional</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.nodeTypeConfigs"></a>

```typescript
public readonly nodeTypeConfigs: IResolvable | GoogleVmwareengineClusterNodeTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#node_type_configs GoogleVmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#timeouts GoogleVmwareengineCluster#timeouts}

---

### GoogleVmwareengineClusterNodeTypeConfigs <a name="GoogleVmwareengineClusterNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterNodeTypeConfigs: googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#node_type_id GoogleVmwareengineCluster#node_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.customCoreCount">customCoreCount</a></code> | <code>number</code> | Customized number of cores available to each node of the type. |

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#node_count GoogleVmwareengineCluster#node_count}

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#node_type_id GoogleVmwareengineCluster#node_type_id}.

---

##### `customCoreCount`<sup>Optional</sup> <a name="customCoreCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.customCoreCount"></a>

```typescript
public readonly customCoreCount: number;
```

- *Type:* number

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
Once the customer is created then corecount cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#custom_core_count GoogleVmwareengineCluster#custom_core_count}

---

### GoogleVmwareengineClusterTimeouts <a name="GoogleVmwareengineClusterTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

const googleVmwareengineClusterTimeouts: googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#create GoogleVmwareengineCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#delete GoogleVmwareengineCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#update GoogleVmwareengineCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#create GoogleVmwareengineCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#delete GoogleVmwareengineCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vmwareengine_cluster#update GoogleVmwareengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput">scaleInInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput">scaleOutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInInput`<sup>Optional</sup> <a name="scaleInInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput"></a>

```typescript
public readonly scaleInInput: number;
```

- *Type:* number

---

##### `scaleOutInput`<sup>Optional</sup> <a name="scaleOutInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput"></a>

```typescript
public readonly scaleOutInput: number;
```

- *Type:* number

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput">scaleInInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput">scaleOutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInInput`<sup>Optional</sup> <a name="scaleInInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput"></a>

```typescript
public readonly scaleInInput: number;
```

- *Type:* number

---

##### `scaleOutInput`<sup>Optional</sup> <a name="scaleOutInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput"></a>

```typescript
public readonly scaleOutInput: number;
```

- *Type:* number

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```typescript
public get(index: number): GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds">putConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds">putCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds">putStorageThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds">resetConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds">resetCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds">resetStorageThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumedMemoryThresholds` <a name="putConsumedMemoryThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds"></a>

```typescript
public putConsumedMemoryThresholds(value: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---

##### `putCpuThresholds` <a name="putCpuThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds"></a>

```typescript
public putCpuThresholds(value: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---

##### `putStorageThresholds` <a name="putStorageThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds"></a>

```typescript
public putStorageThresholds(value: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---

##### `resetConsumedMemoryThresholds` <a name="resetConsumedMemoryThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds"></a>

```typescript
public resetConsumedMemoryThresholds(): void
```

##### `resetCpuThresholds` <a name="resetCpuThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds"></a>

```typescript
public resetCpuThresholds(): void
```

##### `resetStorageThresholds` <a name="resetStorageThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds"></a>

```typescript
public resetStorageThresholds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">consumedMemoryThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">cpuThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">storageThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput">autoscalePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput">consumedMemoryThresholdsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput">cpuThresholdsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput">scaleOutSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput">storageThresholdsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">autoscalePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">scaleOutSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumedMemoryThresholds`<sup>Required</sup> <a name="consumedMemoryThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```typescript
public readonly consumedMemoryThresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a>

---

##### `cpuThresholds`<sup>Required</sup> <a name="cpuThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```typescript
public readonly cpuThresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a>

---

##### `storageThresholds`<sup>Required</sup> <a name="storageThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```typescript
public readonly storageThresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a>

---

##### `autoscalePolicyIdInput`<sup>Optional</sup> <a name="autoscalePolicyIdInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput"></a>

```typescript
public readonly autoscalePolicyIdInput: string;
```

- *Type:* string

---

##### `consumedMemoryThresholdsInput`<sup>Optional</sup> <a name="consumedMemoryThresholdsInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput"></a>

```typescript
public readonly consumedMemoryThresholdsInput: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---

##### `cpuThresholdsInput`<sup>Optional</sup> <a name="cpuThresholdsInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput"></a>

```typescript
public readonly cpuThresholdsInput: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput"></a>

```typescript
public readonly nodeTypeIdInput: string;
```

- *Type:* string

---

##### `scaleOutSizeInput`<sup>Optional</sup> <a name="scaleOutSizeInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput"></a>

```typescript
public readonly scaleOutSizeInput: number;
```

- *Type:* number

---

##### `storageThresholdsInput`<sup>Optional</sup> <a name="storageThresholdsInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput"></a>

```typescript
public readonly storageThresholdsInput: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---

##### `autoscalePolicyId`<sup>Required</sup> <a name="autoscalePolicyId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```typescript
public readonly autoscalePolicyId: string;
```

- *Type:* string

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `scaleOutSize`<sup>Required</sup> <a name="scaleOutSize" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```typescript
public readonly scaleOutSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput">scaleInInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput">scaleOutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">scaleIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">scaleOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInInput`<sup>Optional</sup> <a name="scaleInInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput"></a>

```typescript
public readonly scaleInInput: number;
```

- *Type:* number

---

##### `scaleOutInput`<sup>Optional</sup> <a name="scaleOutInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput"></a>

```typescript
public readonly scaleOutInput: number;
```

- *Type:* number

---

##### `scaleIn`<sup>Required</sup> <a name="scaleIn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```typescript
public readonly scaleIn: number;
```

- *Type:* number

---

##### `scaleOut`<sup>Required</sup> <a name="scaleOut" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```typescript
public readonly scaleOut: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies">putAutoscalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod">resetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount">resetMaxClusterNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount">resetMinClusterNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingPolicies` <a name="putAutoscalingPolicies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies"></a>

```typescript
public putAutoscalingPolicies(value: IResolvable | GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]

---

##### `resetCoolDownPeriod` <a name="resetCoolDownPeriod" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod"></a>

```typescript
public resetCoolDownPeriod(): void
```

##### `resetMaxClusterNodeCount` <a name="resetMaxClusterNodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount"></a>

```typescript
public resetMaxClusterNodeCount(): void
```

##### `resetMinClusterNodeCount` <a name="resetMinClusterNodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount"></a>

```typescript
public resetMinClusterNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">autoscalingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput">autoscalingPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput">coolDownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput">maxClusterNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput">minClusterNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">maxClusterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">minClusterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingPolicies`<sup>Required</sup> <a name="autoscalingPolicies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```typescript
public readonly autoscalingPolicies: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `autoscalingPoliciesInput`<sup>Optional</sup> <a name="autoscalingPoliciesInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput"></a>

```typescript
public readonly autoscalingPoliciesInput: IResolvable | GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>[]

---

##### `coolDownPeriodInput`<sup>Optional</sup> <a name="coolDownPeriodInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput"></a>

```typescript
public readonly coolDownPeriodInput: string;
```

- *Type:* string

---

##### `maxClusterNodeCountInput`<sup>Optional</sup> <a name="maxClusterNodeCountInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput"></a>

```typescript
public readonly maxClusterNodeCountInput: number;
```

- *Type:* number

---

##### `minClusterNodeCountInput`<sup>Optional</sup> <a name="minClusterNodeCountInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput"></a>

```typescript
public readonly minClusterNodeCountInput: number;
```

- *Type:* number

---

##### `coolDownPeriod`<sup>Required</sup> <a name="coolDownPeriod" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

---

##### `maxClusterNodeCount`<sup>Required</sup> <a name="maxClusterNodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```typescript
public readonly maxClusterNodeCount: number;
```

- *Type:* number

---

##### `minClusterNodeCount`<sup>Required</sup> <a name="minClusterNodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```typescript
public readonly minClusterNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineClusterAutoscalingSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

---


### GoogleVmwareengineClusterNodeTypeConfigsList <a name="GoogleVmwareengineClusterNodeTypeConfigsList" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.get"></a>

```typescript
public get(index: number): GoogleVmwareengineClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineClusterNodeTypeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>[]

---


### GoogleVmwareengineClusterNodeTypeConfigsOutputReference <a name="GoogleVmwareengineClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">resetCustomCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomCoreCount` <a name="resetCustomCoreCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```typescript
public resetCustomCoreCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">customCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount">customCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCoreCountInput`<sup>Optional</sup> <a name="customCoreCountInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```typescript
public readonly customCoreCountInput: number;
```

- *Type:* number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```typescript
public readonly nodeTypeIdInput: string;
```

- *Type:* string

---

##### `customCoreCount`<sup>Required</sup> <a name="customCoreCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```typescript
public readonly customCoreCount: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```typescript
public readonly nodeTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineClusterNodeTypeConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>

---


### GoogleVmwareengineClusterTimeoutsOutputReference <a name="GoogleVmwareengineClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineCluster } from '@cdktf/provider-google-beta'

new googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>

---



