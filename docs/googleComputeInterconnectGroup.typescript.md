# `googleComputeInterconnectGroup` Submodule <a name="`googleComputeInterconnectGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectGroup <a name="GoogleComputeInterconnectGroup" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group google_compute_interconnect_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroup(scope: Construct, id: string, config: GoogleComputeInterconnectGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig">GoogleComputeInterconnectGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig">GoogleComputeInterconnectGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent">putIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects">putInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects">resetInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntent` <a name="putIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent"></a>

```typescript
public putIntent(value: GoogleComputeInterconnectGroupIntent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `putInterconnects` <a name="putInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects"></a>

```typescript
public putInterconnects(value: IResolvable | GoogleComputeInterconnectGroupInterconnects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeInterconnectGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnects` <a name="resetInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects"></a>

```typescript
public resetInterconnects(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInterconnectGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInterconnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured">configured</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects">interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure">physicalStructure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput">intentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput">interconnectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured"></a>

```typescript
public readonly configured: GoogleComputeInterconnectGroupConfiguredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent"></a>

```typescript
public readonly intent: GoogleComputeInterconnectGroupIntentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a>

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects"></a>

```typescript
public readonly interconnects: GoogleComputeInterconnectGroupInterconnectsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a>

---

##### `physicalStructure`<sup>Required</sup> <a name="physicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure"></a>

```typescript
public readonly physicalStructure: GoogleComputeInterconnectGroupPhysicalStructureList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInterconnectGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput"></a>

```typescript
public readonly intentInput: GoogleComputeInterconnectGroupIntent;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `interconnectsInput`<sup>Optional</sup> <a name="interconnectsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput"></a>

```typescript
public readonly interconnectsInput: IResolvable | GoogleComputeInterconnectGroupInterconnects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeInterconnectGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectGroupConfig <a name="GoogleComputeInterconnectGroupConfig" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupConfig: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects">interconnects</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]</code> | interconnects block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent"></a>

```typescript
public readonly intent: GoogleComputeInterconnectGroupIntent;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#intent GoogleComputeInterconnectGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#description GoogleComputeInterconnectGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects"></a>

```typescript
public readonly interconnects: IResolvable | GoogleComputeInterconnectGroupInterconnects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#interconnects GoogleComputeInterconnectGroup#interconnects}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInterconnectGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#timeouts GoogleComputeInterconnectGroup#timeouts}

---

### GoogleComputeInterconnectGroupConfigured <a name="GoogleComputeInterconnectGroupConfigured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupConfigured: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured = { ... }
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapability <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupConfiguredTopologyCapability: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability = { ... }
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers = { ... }
```


### GoogleComputeInterconnectGroupIntent <a name="GoogleComputeInterconnectGroupIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupIntent: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability">topologyCapability</a></code> | <code>string</code> | The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs. |

---

##### `topologyCapability`<sup>Optional</sup> <a name="topologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability"></a>

```typescript
public readonly topologyCapability: string;
```

- *Type:* string

The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs.

Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#topology_capability GoogleComputeInterconnectGroup#topology_capability}

---

### GoogleComputeInterconnectGroupInterconnects <a name="GoogleComputeInterconnectGroupInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupInterconnects: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect">interconnect</a></code> | <code>string</code> | The URL of an Interconnect in this group. All Interconnects in the group are unique. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

The URL of an Interconnect in this group. All Interconnects in the group are unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#interconnect GoogleComputeInterconnectGroup#interconnect}

---

### GoogleComputeInterconnectGroupPhysicalStructure <a name="GoogleComputeInterconnectGroupPhysicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupPhysicalStructure: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure = { ... }
```


### GoogleComputeInterconnectGroupPhysicalStructureMetros <a name="GoogleComputeInterconnectGroupPhysicalStructureMetros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupPhysicalStructureMetros: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros = { ... }
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupPhysicalStructureMetrosFacilities: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities = { ... }
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones = { ... }
```


### GoogleComputeInterconnectGroupTimeouts <a name="GoogleComputeInterconnectGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

const googleComputeInterconnectGroupTimeouts: googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectGroupConfiguredList <a name="GoogleComputeInterconnectGroupConfiguredList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupConfiguredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupConfiguredOutputReference <a name="GoogleComputeInterconnectGroupConfiguredOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability">topologyCapability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topologyCapability`<sup>Required</sup> <a name="topologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability"></a>

```typescript
public readonly topologyCapability: GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupConfigured;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType">blockerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink">documentationLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation">explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities">facilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects">interconnects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros">metros</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockerType`<sup>Required</sup> <a name="blockerType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType"></a>

```typescript
public readonly blockerType: string;
```

- *Type:* string

---

##### `documentationLink`<sup>Required</sup> <a name="documentationLink" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink"></a>

```typescript
public readonly documentationLink: string;
```

- *Type:* string

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation"></a>

```typescript
public readonly explanation: string;
```

- *Type:* string

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities"></a>

```typescript
public readonly facilities: string[];
```

- *Type:* string[]

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects"></a>

```typescript
public readonly interconnects: string[];
```

- *Type:* string[]

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros"></a>

```typescript
public readonly metros: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers">intendedCapabilityBlockers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla">supportedSla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intendedCapabilityBlockers`<sup>Required</sup> <a name="intendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers"></a>

```typescript
public readonly intendedCapabilityBlockers: GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a>

---

##### `supportedSla`<sup>Required</sup> <a name="supportedSla" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla"></a>

```typescript
public readonly supportedSla: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupConfiguredTopologyCapability;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a>

---


### GoogleComputeInterconnectGroupIntentOutputReference <a name="GoogleComputeInterconnectGroupIntentOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability">resetTopologyCapability</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopologyCapability` <a name="resetTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability"></a>

```typescript
public resetTopologyCapability(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput">topologyCapabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability">topologyCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topologyCapabilityInput`<sup>Optional</sup> <a name="topologyCapabilityInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput"></a>

```typescript
public readonly topologyCapabilityInput: string;
```

- *Type:* string

---

##### `topologyCapability`<sup>Required</sup> <a name="topologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability"></a>

```typescript
public readonly topologyCapability: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupIntent;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---


### GoogleComputeInterconnectGroupInterconnectsList <a name="GoogleComputeInterconnectGroupInterconnectsList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupInterconnectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectGroupInterconnects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>[]

---


### GoogleComputeInterconnectGroupInterconnectsOutputReference <a name="GoogleComputeInterconnectGroupInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect">resetInterconnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect"></a>

```typescript
public resetInterconnect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput">interconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect">interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput"></a>

```typescript
public readonly interconnectInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectGroupInterconnects;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureList <a name="GoogleComputeInterconnectGroupPhysicalStructureList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupPhysicalStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility">facility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones">zones</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facility`<sup>Required</sup> <a name="facility" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility"></a>

```typescript
public readonly facility: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones"></a>

```typescript
public readonly zones: GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects">interconnects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects"></a>

```typescript
public readonly interconnects: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities">facilities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro">metro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities"></a>

```typescript
public readonly facilities: GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a>

---

##### `metro`<sup>Required</sup> <a name="metro" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro"></a>

```typescript
public readonly metro: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupPhysicalStructureMetros;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros">metros</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros"></a>

```typescript
public readonly metros: GoogleComputeInterconnectGroupPhysicalStructureMetrosList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectGroupPhysicalStructure;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a>

---


### GoogleComputeInterconnectGroupTimeoutsOutputReference <a name="GoogleComputeInterconnectGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnectGroup } from '@cdktf/provider-google-beta'

new googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---



