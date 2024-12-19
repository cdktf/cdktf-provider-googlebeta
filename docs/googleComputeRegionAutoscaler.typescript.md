# `googleComputeRegionAutoscaler` Submodule <a name="`googleComputeRegionAutoscaler` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionAutoscaler <a name="GoogleComputeRegionAutoscaler" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler google_compute_region_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler(scope: Construct, id: string, config: GoogleComputeRegionAutoscalerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig">GoogleComputeRegionAutoscalerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig">GoogleComputeRegionAutoscalerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.putAutoscalingPolicy">putAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingPolicy` <a name="putAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.putAutoscalingPolicy"></a>

```typescript
public putAutoscalingPolicy(value: GoogleComputeRegionAutoscalerAutoscalingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionAutoscalerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isConstruct"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformElement"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformResource"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionAutoscaler resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionAutoscaler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference">GoogleComputeRegionAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionAutoscalerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference">GoogleComputeRegionAutoscalerTimeoutsOutputReference</a>

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.autoscalingPolicyInput"></a>

```typescript
public readonly autoscalingPolicyInput: GoogleComputeRegionAutoscalerAutoscalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionAutoscalerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscaler.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionAutoscalerAutoscalingPolicy <a name="GoogleComputeRegionAutoscalerAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicy: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas">minReplicas</a></code> | <code>number</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod">cooldownPeriod</a></code> | <code>number</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.metric">metric</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]</code> | metric block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.mode">mode</a></code> | <code>string</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.scaleDownControl">scaleDownControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a></code> | scale_down_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules">scalingSchedules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]</code> | scaling_schedules block. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#max_replicas GoogleComputeRegionAutoscaler#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#min_replicas GoogleComputeRegionAutoscaler#min_replicas}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```typescript
public readonly cooldownPeriod: number;
```

- *Type:* number

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#cooldown_period GoogleComputeRegionAutoscaler#cooldown_period}

---

##### `cpuUtilization`<sup>Optional</sup> <a name="cpuUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```typescript
public readonly cpuUtilization: GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#cpu_utilization GoogleComputeRegionAutoscaler#cpu_utilization}

---

##### `loadBalancingUtilization`<sup>Optional</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```typescript
public readonly loadBalancingUtilization: GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#load_balancing_utilization GoogleComputeRegionAutoscaler#load_balancing_utilization}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.metric"></a>

```typescript
public readonly metric: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#metric GoogleComputeRegionAutoscaler#metric}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#mode GoogleComputeRegionAutoscaler#mode}

---

##### `scaleDownControl`<sup>Optional</sup> <a name="scaleDownControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.scaleDownControl"></a>

```typescript
public readonly scaleDownControl: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a>

scale_down_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#scale_down_control GoogleComputeRegionAutoscaler#scale_down_control}

---

##### `scaleInControl`<sup>Optional</sup> <a name="scaleInControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```typescript
public readonly scaleInControl: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#scale_in_control GoogleComputeRegionAutoscaler#scale_in_control}

---

##### `scalingSchedules`<sup>Optional</sup> <a name="scalingSchedules" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```typescript
public readonly scalingSchedules: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#scaling_schedules GoogleComputeRegionAutoscaler#scaling_schedules}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target">target</a></code> | <code>number</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">predictiveMethod</a></code> | <code>string</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#target GoogleComputeRegionAutoscaler#target}

---

##### `predictiveMethod`<sup>Optional</sup> <a name="predictiveMethod" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```typescript
public readonly predictiveMethod: string;
```

- *Type:* string

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.

- OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#predictive_method GoogleComputeRegionAutoscaler#predictive_method}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">target</a></code> | <code>number</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#target GoogleComputeRegionAutoscaler#target}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyMetric <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyMetric: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.name">name</a></code> | <code>string</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.filter">filter</a></code> | <code>string</code> | A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment">singleInstanceAssignment</a></code> | <code>number</code> | If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.target">target</a></code> | <code>number</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.type">type</a></code> | <code>string</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#name GoogleComputeRegionAutoscaler#name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data.

You can only use the AND operator for joining selectors.
You can only use direct equality comparison operator (=) without
any functions for each selector.
You can specify the metric in both the filter string and in the
metric field. However, if specified in both places, the metric must
be identical.

The monitored resource type determines what kind of values are
expected for the metric. If it is a gce_instance, the autoscaler
expects the metric to include a separate TimeSeries for each
instance in a group. In such a case, you cannot filter on resource
labels.

If the resource type is any other value, the autoscaler expects
this metric to contain values that apply to the entire autoscaled
instance group and resource label filtering can be performed to
point autoscaler at the correct TimeSeries to scale upon.
This is called a per-group metric for the purpose of autoscaling.

If not specified, the type defaults to gce_instance.

You should provide a filter that is selective enough to pick just
one TimeSeries for the autoscaled group or for each of the instances
(if you are using gce_instance resource type). If multiple
TimeSeries are returned upon the query execution, the autoscaler
will sum their respective values to obtain its scaling value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#filter GoogleComputeRegionAutoscaler#filter}

---

##### `singleInstanceAssignment`<sup>Optional</sup> <a name="singleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment"></a>

```typescript
public readonly singleInstanceAssignment: number;
```

- *Type:* number

If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group.

The autoscaler will keep the number of instances proportional to the
value of this metric, the metric itself should not change value due
to group resizing.

For example, a good metric to use with the target is
'pubsub.googleapis.com/subscription/num_undelivered_messages'
or a custom metric exporting the total number of requests coming to
your instances.

A bad example would be a metric exporting an average or median
latency, since this value can't include a chunk assignable to a
single instance, it could be better used with utilization_target
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#single_instance_assignment GoogleComputeRegionAutoscaler#single_instance_assignment}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#target GoogleComputeRegionAutoscaler#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#type GoogleComputeRegionAutoscaler#type}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl.property.maxScaledDownReplicas">maxScaledDownReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | max_scaled_down_replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl.property.timeWindowSec">timeWindowSec</a></code> | <code>number</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `maxScaledDownReplicas`<sup>Optional</sup> <a name="maxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl.property.maxScaledDownReplicas"></a>

```typescript
public readonly maxScaledDownReplicas: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

max_scaled_down_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#max_scaled_down_replicas GoogleComputeRegionAutoscaler#max_scaled_down_replicas}

---

##### `timeWindowSec`<sup>Optional</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl.property.timeWindowSec"></a>

```typescript
public readonly timeWindowSec: number;
```

- *Type:* number

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#time_window_sec GoogleComputeRegionAutoscaler#time_window_sec}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.fixed">fixed</a></code> | <code>number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.percent">percent</a></code> | <code>number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#fixed GoogleComputeRegionAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#percent GoogleComputeRegionAutoscaler#percent}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyScaleInControl: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">timeWindowSec</a></code> | <code>number</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `maxScaledInReplicas`<sup>Optional</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```typescript
public readonly maxScaledInReplicas: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#max_scaled_in_replicas GoogleComputeRegionAutoscaler#max_scaled_in_replicas}

---

##### `timeWindowSec`<sup>Optional</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```typescript
public readonly timeWindowSec: number;
```

- *Type:* number

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#time_window_sec GoogleComputeRegionAutoscaler#time_window_sec}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">fixed</a></code> | <code>number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">percent</a></code> | <code>number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#fixed GoogleComputeRegionAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#percent GoogleComputeRegionAutoscaler#percent}

---

### GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">durationSec</a></code> | <code>number</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>number</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#name GoogleComputeRegionAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">schedule</a></code> | <code>string</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description">description</a></code> | <code>string</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone to be used when interpreting the schedule. |

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```typescript
public readonly durationSec: number;
```

- *Type:* number

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#duration_sec GoogleComputeRegionAutoscaler#duration_sec}

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```typescript
public readonly minRequiredReplicas: number;
```

- *Type:* number

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#min_required_replicas GoogleComputeRegionAutoscaler#min_required_replicas}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#name GoogleComputeRegionAutoscaler#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#schedule GoogleComputeRegionAutoscaler#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#description GoogleComputeRegionAutoscaler#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#disabled GoogleComputeRegionAutoscaler#disabled}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#time_zone GoogleComputeRegionAutoscaler#time_zone}

---

### GoogleComputeRegionAutoscalerConfig <a name="GoogleComputeRegionAutoscalerConfig" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerConfig: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.target">target</a></code> | <code>string</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#id GoogleComputeRegionAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#project GoogleComputeRegionAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.region">region</a></code> | <code>string</code> | URL of the region where the instance group resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: GoogleComputeRegionAutoscalerAutoscalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#autoscaling_policy GoogleComputeRegionAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#name GoogleComputeRegionAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#target GoogleComputeRegionAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#description GoogleComputeRegionAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#id GoogleComputeRegionAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#project GoogleComputeRegionAutoscaler#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#region GoogleComputeRegionAutoscaler#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionAutoscalerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#timeouts GoogleComputeRegionAutoscaler#timeouts}

---

### GoogleComputeRegionAutoscalerTimeouts <a name="GoogleComputeRegionAutoscalerTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

const googleComputeRegionAutoscalerTimeouts: googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#create GoogleComputeRegionAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#delete GoogleComputeRegionAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#update GoogleComputeRegionAutoscaler#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#create GoogleComputeRegionAutoscaler#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#delete GoogleComputeRegionAutoscaler#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_autoscaler#update GoogleComputeRegionAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">resetPredictiveMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictiveMethod` <a name="resetPredictiveMethod" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```typescript
public resetPredictiveMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">predictiveMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">predictiveMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predictiveMethodInput`<sup>Optional</sup> <a name="predictiveMethodInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```typescript
public readonly predictiveMethodInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `predictiveMethod`<sup>Required</sup> <a name="predictiveMethod" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```typescript
public readonly predictiveMethod: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment">resetSingleInstanceAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSingleInstanceAssignment` <a name="resetSingleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment"></a>

```typescript
public resetSingleInstanceAssignment(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput">singleInstanceAssignmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment">singleInstanceAssignment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `singleInstanceAssignmentInput`<sup>Optional</sup> <a name="singleInstanceAssignmentInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput"></a>

```typescript
public readonly singleInstanceAssignmentInput: number;
```

- *Type:* number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `singleInstanceAssignment`<sup>Required</sup> <a name="singleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment"></a>

```typescript
public readonly singleInstanceAssignment: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyMetric;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">putCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">putLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl">putScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">putScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">putScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">resetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">resetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleDownControl">resetScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">resetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">resetScalingSchedules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCpuUtilization` <a name="putCpuUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```typescript
public putCpuUtilization(value: GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `putLoadBalancingUtilization` <a name="putLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```typescript
public putLoadBalancingUtilization(value: GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```typescript
public putMetric(value: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]

---

##### `putScaleDownControl` <a name="putScaleDownControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl"></a>

```typescript
public putScaleDownControl(value: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a>

---

##### `putScaleInControl` <a name="putScaleInControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```typescript
public putScaleInControl(value: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `putScalingSchedules` <a name="putScalingSchedules" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```typescript
public putScalingSchedules(value: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]

---

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```typescript
public resetCooldownPeriod(): void
```

##### `resetCpuUtilization` <a name="resetCpuUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```typescript
public resetCpuUtilization(): void
```

##### `resetLoadBalancingUtilization` <a name="resetLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```typescript
public resetLoadBalancingUtilization(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetScaleDownControl` <a name="resetScaleDownControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleDownControl"></a>

```typescript
public resetScaleDownControl(): void
```

##### `resetScaleInControl` <a name="resetScaleInControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```typescript
public resetScaleInControl(): void
```

##### `resetScalingSchedules` <a name="resetScalingSchedules" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```typescript
public resetScalingSchedules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList">GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControl">scaleDownControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">scalingSchedules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">cpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">loadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput">metricInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControlInput">scaleDownControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">scaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">scalingSchedulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">minReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```typescript
public readonly cpuUtilization: GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `loadBalancingUtilization`<sup>Required</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```typescript
public readonly loadBalancingUtilization: GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```typescript
public readonly metric: GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList">GoogleComputeRegionAutoscalerAutoscalingPolicyMetricList</a>

---

##### `scaleDownControl`<sup>Required</sup> <a name="scaleDownControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControl"></a>

```typescript
public readonly scaleDownControl: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference</a>

---

##### `scaleInControl`<sup>Required</sup> <a name="scaleInControl" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```typescript
public readonly scaleInControl: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `scalingSchedules`<sup>Required</sup> <a name="scalingSchedules" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```typescript
public readonly scalingSchedules: GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```typescript
public readonly cooldownPeriodInput: number;
```

- *Type:* number

---

##### `cpuUtilizationInput`<sup>Optional</sup> <a name="cpuUtilizationInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```typescript
public readonly cpuUtilizationInput: GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `loadBalancingUtilizationInput`<sup>Optional</sup> <a name="loadBalancingUtilizationInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```typescript
public readonly loadBalancingUtilizationInput: GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```typescript
public readonly maxReplicasInput: number;
```

- *Type:* number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyMetric">GoogleComputeRegionAutoscalerAutoscalingPolicyMetric</a>[]

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```typescript
public readonly minReplicasInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `scaleDownControlInput`<sup>Optional</sup> <a name="scaleDownControlInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControlInput"></a>

```typescript
public readonly scaleDownControlInput: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a>

---

##### `scaleInControlInput`<sup>Optional</sup> <a name="scaleInControlInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```typescript
public readonly scaleInControlInput: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `scalingSchedulesInput`<sup>Optional</sup> <a name="scalingSchedulesInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```typescript
public readonly scalingSchedulesInput: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```typescript
public readonly cooldownPeriod: number;
```

- *Type:* number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicy">GoogleComputeRegionAutoscalerAutoscalingPolicy</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetFixed"></a>

```typescript
public resetFixed(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixedInput">fixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixed">fixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixedInput"></a>

```typescript
public readonly fixedInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas">putMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetMaxScaledDownReplicas">resetMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetTimeWindowSec">resetTimeWindowSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxScaledDownReplicas` <a name="putMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas"></a>

```typescript
public putMaxScaledDownReplicas(value: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---

##### `resetMaxScaledDownReplicas` <a name="resetMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetMaxScaledDownReplicas"></a>

```typescript
public resetMaxScaledDownReplicas(): void
```

##### `resetTimeWindowSec` <a name="resetTimeWindowSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetTimeWindowSec"></a>

```typescript
public resetTimeWindowSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicas">maxScaledDownReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicasInput">maxScaledDownReplicasInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSecInput">timeWindowSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSec">timeWindowSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxScaledDownReplicas`<sup>Required</sup> <a name="maxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicas"></a>

```typescript
public readonly maxScaledDownReplicas: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference</a>

---

##### `maxScaledDownReplicasInput`<sup>Optional</sup> <a name="maxScaledDownReplicasInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicasInput"></a>

```typescript
public readonly maxScaledDownReplicasInput: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---

##### `timeWindowSecInput`<sup>Optional</sup> <a name="timeWindowSecInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSecInput"></a>

```typescript
public readonly timeWindowSecInput: number;
```

- *Type:* number

---

##### `timeWindowSec`<sup>Required</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSec"></a>

```typescript
public readonly timeWindowSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleDownControl</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```typescript
public resetFixed(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">fixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">fixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```typescript
public readonly fixedInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">putMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">resetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">resetTimeWindowSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxScaledInReplicas` <a name="putMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```typescript
public putMaxScaledInReplicas(value: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `resetMaxScaledInReplicas` <a name="resetMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```typescript
public resetMaxScaledInReplicas(): void
```

##### `resetTimeWindowSec` <a name="resetTimeWindowSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```typescript
public resetTimeWindowSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">maxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">timeWindowSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">timeWindowSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxScaledInReplicas`<sup>Required</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```typescript
public readonly maxScaledInReplicas: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `maxScaledInReplicasInput`<sup>Optional</sup> <a name="maxScaledInReplicasInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```typescript
public readonly maxScaledInReplicasInput: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `timeWindowSecInput`<sup>Optional</sup> <a name="timeWindowSecInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```typescript
public readonly timeWindowSecInput: number;
```

- *Type:* number

---

##### `timeWindowSec`<sup>Required</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```typescript
public readonly timeWindowSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>[]

---


### GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">durationSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">minRequiredReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">durationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `durationSecInput`<sup>Optional</sup> <a name="durationSecInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```typescript
public readonly durationSecInput: number;
```

- *Type:* number

---

##### `minRequiredReplicasInput`<sup>Optional</sup> <a name="minRequiredReplicasInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```typescript
public readonly minRequiredReplicasInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```typescript
public readonly durationSec: number;
```

- *Type:* number

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```typescript
public readonly minRequiredReplicas: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>

---


### GoogleComputeRegionAutoscalerTimeoutsOutputReference <a name="GoogleComputeRegionAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionAutoscaler } from '@cdktf/provider-google-beta'

new googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionAutoscalerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionAutoscaler.GoogleComputeRegionAutoscalerTimeouts">GoogleComputeRegionAutoscalerTimeouts</a>

---



