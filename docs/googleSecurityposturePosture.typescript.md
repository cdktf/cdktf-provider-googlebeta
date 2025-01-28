# `googleSecurityposturePosture` Submodule <a name="`googleSecurityposturePosture` Submodule" id="@cdktf/provider-google-beta.googleSecurityposturePosture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityposturePosture <a name="GoogleSecurityposturePosture" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture google_securityposture_posture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosture(scope: Construct, id: string, config: GoogleSecurityposturePostureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig">GoogleSecurityposturePostureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig">GoogleSecurityposturePostureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.putPolicySets">putPolicySets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicySets` <a name="putPolicySets" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.putPolicySets"></a>

```typescript
public putPolicySets(value: IResolvable | GoogleSecurityposturePosturePolicySets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.putPolicySets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSecurityposturePostureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecurityposturePosture resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isConstruct"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

googleSecurityposturePosture.GoogleSecurityposturePosture.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformElement"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformResource"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSecurityposturePosture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecurityposturePosture to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecurityposturePosture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecurityposturePosture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.policySets">policySets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList">GoogleSecurityposturePosturePolicySetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference">GoogleSecurityposturePostureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.policySetsInput">policySetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.postureIdInput">postureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.postureId">postureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policySets`<sup>Required</sup> <a name="policySets" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.policySets"></a>

```typescript
public readonly policySets: GoogleSecurityposturePosturePolicySetsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList">GoogleSecurityposturePosturePolicySetsList</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSecurityposturePostureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference">GoogleSecurityposturePostureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `policySetsInput`<sup>Optional</sup> <a name="policySetsInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.policySetsInput"></a>

```typescript
public readonly policySetsInput: IResolvable | GoogleSecurityposturePosturePolicySets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]

---

##### `postureIdInput`<sup>Optional</sup> <a name="postureIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.postureIdInput"></a>

```typescript
public readonly postureIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSecurityposturePostureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.postureId"></a>

```typescript
public readonly postureId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosture.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityposturePostureConfig <a name="GoogleSecurityposturePostureConfig" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePostureConfig: googleSecurityposturePosture.GoogleSecurityposturePostureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.location">location</a></code> | <code>string</code> | Location of the resource, eg: global. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.policySets">policySets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]</code> | policy_sets block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.postureId">postureId</a></code> | <code>string</code> | Id of the posture. It is an immutable field. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.state">state</a></code> | <code>string</code> | State of the posture. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.description">description</a></code> | <code>string</code> | Description of the posture. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#id GoogleSecurityposturePosture#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource, eg: global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#parent GoogleSecurityposturePosture#parent}

---

##### `policySets`<sup>Required</sup> <a name="policySets" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.policySets"></a>

```typescript
public readonly policySets: IResolvable | GoogleSecurityposturePosturePolicySets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]

policy_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#policy_sets GoogleSecurityposturePosture#policy_sets}

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.postureId"></a>

```typescript
public readonly postureId: string;
```

- *Type:* string

Id of the posture. It is an immutable field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#posture_id GoogleSecurityposturePosture#posture_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

State of the posture.

Update to state field should not be triggered along with
with other field updates. Possible values: ["DEPRECATED", "DRAFT", "ACTIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#state GoogleSecurityposturePosture#state}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the posture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#id GoogleSecurityposturePosture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSecurityposturePostureTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#timeouts GoogleSecurityposturePosture#timeouts}

---

### GoogleSecurityposturePosturePolicySets <a name="GoogleSecurityposturePosturePolicySets" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySets: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.property.policies">policies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]</code> | policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.property.policySetId">policySetId</a></code> | <code>string</code> | ID of the policy set. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.property.description">description</a></code> | <code>string</code> | Description of the policy set. |

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.property.policies"></a>

```typescript
public readonly policies: IResolvable | GoogleSecurityposturePosturePolicySetsPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#policies GoogleSecurityposturePosture#policies}

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.property.policySetId"></a>

```typescript
public readonly policySetId: string;
```

- *Type:* string

ID of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#policy_set_id GoogleSecurityposturePosture#policy_set_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

### GoogleSecurityposturePosturePolicySetsPolicies <a name="GoogleSecurityposturePosturePolicySetsPolicies" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPolicies: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a></code> | constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.policyId">policyId</a></code> | <code>string</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.complianceStandards">complianceStandards</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]</code> | compliance_standards block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.description">description</a></code> | <code>string</code> | Description of the policy. |

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.constraint"></a>

```typescript
public readonly constraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a>

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#constraint GoogleSecurityposturePosture#constraint}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#policy_id GoogleSecurityposturePosture#policy_id}

---

##### `complianceStandards`<sup>Optional</sup> <a name="complianceStandards" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]

compliance_standards block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#compliance_standards GoogleSecurityposturePosture#compliance_standards}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

### GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards <a name="GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesComplianceStandards: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards.property.control">control</a></code> | <code>string</code> | Mapping of security controls for the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards.property.standard">standard</a></code> | <code>string</code> | Mapping of compliance standards for the policy. |

---

##### `control`<sup>Optional</sup> <a name="control" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards.property.control"></a>

```typescript
public readonly control: string;
```

- *Type:* string

Mapping of security controls for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#control GoogleSecurityposturePosture#control}

---

##### `standard`<sup>Optional</sup> <a name="standard" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

Mapping of compliance standards for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#standard GoogleSecurityposturePosture#standard}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraint <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraint: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraint">orgPolicyConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a></code> | org_policy_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraintCustom">orgPolicyConstraintCustom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a></code> | org_policy_constraint_custom block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsCustomModule">securityHealthAnalyticsCustomModule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a></code> | security_health_analytics_custom_module block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsModule">securityHealthAnalyticsModule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a></code> | security_health_analytics_module block. |

---

##### `orgPolicyConstraint`<sup>Optional</sup> <a name="orgPolicyConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraint"></a>

```typescript
public readonly orgPolicyConstraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

org_policy_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#org_policy_constraint GoogleSecurityposturePosture#org_policy_constraint}

---

##### `orgPolicyConstraintCustom`<sup>Optional</sup> <a name="orgPolicyConstraintCustom" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraintCustom"></a>

```typescript
public readonly orgPolicyConstraintCustom: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

org_policy_constraint_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#org_policy_constraint_custom GoogleSecurityposturePosture#org_policy_constraint_custom}

---

##### `securityHealthAnalyticsCustomModule`<sup>Optional</sup> <a name="securityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsCustomModule"></a>

```typescript
public readonly securityHealthAnalyticsCustomModule: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

security_health_analytics_custom_module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#security_health_analytics_custom_module GoogleSecurityposturePosture#security_health_analytics_custom_module}

---

##### `securityHealthAnalyticsModule`<sup>Optional</sup> <a name="securityHealthAnalyticsModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsModule"></a>

```typescript
public readonly securityHealthAnalyticsModule: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

security_health_analytics_module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#security_health_analytics_module GoogleSecurityposturePosture#security_health_analytics_module}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.cannedConstraintId">cannedConstraintId</a></code> | <code>string</code> | Organization policy canned constraint Id. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.policyRules">policyRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]</code> | policy_rules block. |

---

##### `cannedConstraintId`<sup>Required</sup> <a name="cannedConstraintId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.cannedConstraintId"></a>

```typescript
public readonly cannedConstraintId: string;
```

- *Type:* string

Organization policy canned constraint Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#canned_constraint_id GoogleSecurityposturePosture#canned_constraint_id}

---

##### `policyRules`<sup>Required</sup> <a name="policyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.policyRules"></a>

```typescript
public readonly policyRules: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#policy_rules GoogleSecurityposturePosture#policy_rules}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.policyRules">policyRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]</code> | policy_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.customConstraint">customConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a></code> | custom_constraint block. |

---

##### `policyRules`<sup>Required</sup> <a name="policyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.policyRules"></a>

```typescript
public readonly policyRules: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#policy_rules GoogleSecurityposturePosture#policy_rules}

---

##### `customConstraint`<sup>Optional</sup> <a name="customConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.customConstraint"></a>

```typescript
public readonly customConstraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

custom_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#custom_constraint GoogleSecurityposturePosture#custom_constraint}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.actionType">actionType</a></code> | <code>string</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.condition">condition</a></code> | <code>string</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.methodTypes">methodTypes</a></code> | <code>string[]</code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.name">name</a></code> | <code>string</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.description">description</a></code> | <code>string</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.displayName">displayName</a></code> | <code>string</code> | A human-friendly name for the constraint. |

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#action_type GoogleSecurityposturePosture#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#condition GoogleSecurityposturePosture#condition}

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.methodTypes"></a>

```typescript
public readonly methodTypes: string[];
```

- *Type:* string[]

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#method_types GoogleSecurityposturePosture#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#name GoogleSecurityposturePosture#name}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#resource_types GoogleSecurityposturePosture#resource_types}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#display_name GoogleSecurityposturePosture#display_name}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.allowAll">allowAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to true means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.denyAll">denyAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to true means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | If 'true', then the policy is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.allowAll"></a>

```typescript
public readonly allowAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to true means that all values are allowed.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#allow_all GoogleSecurityposturePosture#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.condition"></a>

```typescript
public readonly condition: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#condition GoogleSecurityposturePosture#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.denyAll"></a>

```typescript
public readonly denyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to true means that all values are denied.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#deny_all GoogleSecurityposturePosture#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If 'true', then the policy is enforced.

If 'false', then any configuration is acceptable.
This field can be set only in policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#enforce GoogleSecurityposturePosture#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.values"></a>

```typescript
public readonly values: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#values GoogleSecurityposturePosture#values}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#allowed_values GoogleSecurityposturePosture#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#denied_values GoogleSecurityposturePosture#denied_values}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.allowAll">allowAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to true means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.denyAll">denyAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to true means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | If 'true', then the policy is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.allowAll"></a>

```typescript
public readonly allowAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to true means that all values are allowed.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#allow_all GoogleSecurityposturePosture#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.condition"></a>

```typescript
public readonly condition: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#condition GoogleSecurityposturePosture#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.denyAll"></a>

```typescript
public readonly denyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to true means that all values are denied.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#deny_all GoogleSecurityposturePosture#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If 'true', then the policy is enforced.

If 'false', then any configuration is acceptable.
This field can be set only in policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#enforce GoogleSecurityposturePosture#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.values"></a>

```typescript
public readonly values: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#values GoogleSecurityposturePosture#values}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#allowed_values GoogleSecurityposturePosture#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#denied_values GoogleSecurityposturePosture#denied_values}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.moduleEnablementState">moduleEnablementState</a></code> | <code>string</code> | The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.config"></a>

```typescript
public readonly config: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#config GoogleSecurityposturePosture#config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#display_name GoogleSecurityposturePosture#display_name}

---

##### `moduleEnablementState`<sup>Optional</sup> <a name="moduleEnablementState" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.moduleEnablementState"></a>

```typescript
public readonly moduleEnablementState: string;
```

- *Type:* string

The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#module_enablement_state GoogleSecurityposturePosture#module_enablement_state}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.severity">severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["SEVERITY_UNSPECIFIED", "CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.description">description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.recommendation">recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.predicate"></a>

```typescript
public readonly predicate: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#predicate GoogleSecurityposturePosture#predicate}

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.resourceSelector"></a>

```typescript
public readonly resourceSelector: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#resource_selector GoogleSecurityposturePosture#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["SEVERITY_UNSPECIFIED", "CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#severity GoogleSecurityposturePosture#severity}

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.customOutput"></a>

```typescript
public readonly customOutput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#custom_output GoogleSecurityposturePosture#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#recommendation GoogleSecurityposturePosture#recommendation}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput.property.properties">properties</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput.property.properties"></a>

```typescript
public readonly properties: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#properties GoogleSecurityposturePosture#properties}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.name">name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#name GoogleSecurityposturePosture#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.valueExpression"></a>

```typescript
public readonly valueExpression: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#value_expression GoogleSecurityposturePosture#value_expression}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#resource_types GoogleSecurityposturePosture#resource_types}

---

### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule: googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleName">moduleName</a></code> | <code>string</code> | The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleEnablementState">moduleEnablementState</a></code> | <code>string</code> | The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#module_name GoogleSecurityposturePosture#module_name}

---

##### `moduleEnablementState`<sup>Optional</sup> <a name="moduleEnablementState" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleEnablementState"></a>

```typescript
public readonly moduleEnablementState: string;
```

- *Type:* string

The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#module_enablement_state GoogleSecurityposturePosture#module_enablement_state}

---

### GoogleSecurityposturePostureTimeouts <a name="GoogleSecurityposturePostureTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

const googleSecurityposturePostureTimeouts: googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#create GoogleSecurityposturePosture#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#delete GoogleSecurityposturePosture#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#update GoogleSecurityposturePosture#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#create GoogleSecurityposturePosture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#delete GoogleSecurityposturePosture#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_securityposture_posture#update GoogleSecurityposturePosture#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityposturePosturePolicySetsList <a name="GoogleSecurityposturePosturePolicySetsList" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.get"></a>

```typescript
public get(index: number): GoogleSecurityposturePosturePolicySetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>[]

---


### GoogleSecurityposturePosturePolicySetsOutputReference <a name="GoogleSecurityposturePosturePolicySetsOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | GoogleSecurityposturePosturePolicySetsPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.putPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList">GoogleSecurityposturePosturePolicySetsPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policiesInput">policiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policySetIdInput">policySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policySetId">policySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policies"></a>

```typescript
public readonly policies: GoogleSecurityposturePosturePolicySetsPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList">GoogleSecurityposturePosturePolicySetsPoliciesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | GoogleSecurityposturePosturePolicySetsPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]

---

##### `policySetIdInput`<sup>Optional</sup> <a name="policySetIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policySetIdInput"></a>

```typescript
public readonly policySetIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.policySetId"></a>

```typescript
public readonly policySetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySets">GoogleSecurityposturePosturePolicySets</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList <a name="GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.get"></a>

```typescript
public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]

---


### GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetControl">resetControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetStandard">resetStandard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControl` <a name="resetControl" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetControl"></a>

```typescript
public resetControl(): void
```

##### `resetStandard` <a name="resetStandard" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetStandard"></a>

```typescript
public resetStandard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.controlInput">controlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standardInput">standardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.control">control</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlInput`<sup>Optional</sup> <a name="controlInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.controlInput"></a>

```typescript
public readonly controlInput: string;
```

- *Type:* string

---

##### `standardInput`<sup>Optional</sup> <a name="standardInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standardInput"></a>

```typescript
public readonly standardInput: string;
```

- *Type:* string

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.control"></a>

```typescript
public readonly control: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypesInput">methodTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypes">methodTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `methodTypesInput`<sup>Optional</sup> <a name="methodTypesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypesInput"></a>

```typescript
public readonly methodTypesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `methodTypes`<sup>Required</sup> <a name="methodTypes" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypes"></a>

```typescript
public readonly methodTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putCustomConstraint">putCustomConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putPolicyRules">putPolicyRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resetCustomConstraint">resetCustomConstraint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomConstraint` <a name="putCustomConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putCustomConstraint"></a>

```typescript
public putCustomConstraint(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putCustomConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

---

##### `putPolicyRules` <a name="putPolicyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putPolicyRules"></a>

```typescript
public putPolicyRules(value: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putPolicyRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]

---

##### `resetCustomConstraint` <a name="resetCustomConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resetCustomConstraint"></a>

```typescript
public resetCustomConstraint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraint">customConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRules">policyRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraintInput">customConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRulesInput">policyRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customConstraint`<sup>Required</sup> <a name="customConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraint"></a>

```typescript
public readonly customConstraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference</a>

---

##### `policyRules`<sup>Required</sup> <a name="policyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRules"></a>

```typescript
public readonly policyRules: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList</a>

---

##### `customConstraintInput`<sup>Optional</sup> <a name="customConstraintInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraintInput"></a>

```typescript
public readonly customConstraintInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

---

##### `policyRulesInput`<sup>Optional</sup> <a name="policyRulesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRulesInput"></a>

```typescript
public readonly policyRulesInput: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>[]

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putCondition"></a>

```typescript
public putCondition(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putValues"></a>

```typescript
public putValues(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetAllowAll"></a>

```typescript
public resetAllowAll(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetDenyAll"></a>

```typescript
public resetDenyAll(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAll">allowAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAll">denyAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.values"></a>

```typescript
public readonly values: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAllInput"></a>

```typescript
public readonly allowAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAllInput"></a>

```typescript
public readonly denyAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAll"></a>

```typescript
public readonly allowAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAll"></a>

```typescript
public readonly denyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetDeniedValues"></a>

```typescript
public resetDeniedValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValuesInput"></a>

```typescript
public readonly deniedValuesInput: string[];
```

- *Type:* string[]

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.putPolicyRules">putPolicyRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicyRules` <a name="putPolicyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.putPolicyRules"></a>

```typescript
public putPolicyRules(value: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.putPolicyRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRules">policyRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintIdInput">cannedConstraintIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRulesInput">policyRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintId">cannedConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyRules`<sup>Required</sup> <a name="policyRules" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRules"></a>

```typescript
public readonly policyRules: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList</a>

---

##### `cannedConstraintIdInput`<sup>Optional</sup> <a name="cannedConstraintIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintIdInput"></a>

```typescript
public readonly cannedConstraintIdInput: string;
```

- *Type:* string

---

##### `policyRulesInput`<sup>Optional</sup> <a name="policyRulesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRulesInput"></a>

```typescript
public readonly policyRulesInput: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]

---

##### `cannedConstraintId`<sup>Required</sup> <a name="cannedConstraintId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintId"></a>

```typescript
public readonly cannedConstraintId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>[]

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putCondition"></a>

```typescript
public putCondition(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putValues"></a>

```typescript
public putValues(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetAllowAll"></a>

```typescript
public resetAllowAll(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetDenyAll"></a>

```typescript
public resetDenyAll(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAll">allowAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAll">denyAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforce">enforce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.values"></a>

```typescript
public readonly values: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAllInput"></a>

```typescript
public readonly allowAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAllInput"></a>

```typescript
public readonly denyAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAll"></a>

```typescript
public readonly allowAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAll"></a>

```typescript
public readonly denyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetDeniedValues"></a>

```typescript
public resetDeniedValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValuesInput"></a>

```typescript
public readonly deniedValuesInput: string[];
```

- *Type:* string[]

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraint">putOrgPolicyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraintCustom">putOrgPolicyConstraintCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsCustomModule">putSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsModule">putSecurityHealthAnalyticsModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraint">resetOrgPolicyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraintCustom">resetOrgPolicyConstraintCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsCustomModule">resetSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsModule">resetSecurityHealthAnalyticsModule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrgPolicyConstraint` <a name="putOrgPolicyConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraint"></a>

```typescript
public putOrgPolicyConstraint(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

---

##### `putOrgPolicyConstraintCustom` <a name="putOrgPolicyConstraintCustom" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraintCustom"></a>

```typescript
public putOrgPolicyConstraintCustom(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraintCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

---

##### `putSecurityHealthAnalyticsCustomModule` <a name="putSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsCustomModule"></a>

```typescript
public putSecurityHealthAnalyticsCustomModule(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsCustomModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

---

##### `putSecurityHealthAnalyticsModule` <a name="putSecurityHealthAnalyticsModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsModule"></a>

```typescript
public putSecurityHealthAnalyticsModule(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

---

##### `resetOrgPolicyConstraint` <a name="resetOrgPolicyConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraint"></a>

```typescript
public resetOrgPolicyConstraint(): void
```

##### `resetOrgPolicyConstraintCustom` <a name="resetOrgPolicyConstraintCustom" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraintCustom"></a>

```typescript
public resetOrgPolicyConstraintCustom(): void
```

##### `resetSecurityHealthAnalyticsCustomModule` <a name="resetSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsCustomModule"></a>

```typescript
public resetSecurityHealthAnalyticsCustomModule(): void
```

##### `resetSecurityHealthAnalyticsModule` <a name="resetSecurityHealthAnalyticsModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsModule"></a>

```typescript
public resetSecurityHealthAnalyticsModule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraint">orgPolicyConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustom">orgPolicyConstraintCustom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModule">securityHealthAnalyticsCustomModule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModule">securityHealthAnalyticsModule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustomInput">orgPolicyConstraintCustomInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintInput">orgPolicyConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModuleInput">securityHealthAnalyticsCustomModuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModuleInput">securityHealthAnalyticsModuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orgPolicyConstraint`<sup>Required</sup> <a name="orgPolicyConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraint"></a>

```typescript
public readonly orgPolicyConstraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference</a>

---

##### `orgPolicyConstraintCustom`<sup>Required</sup> <a name="orgPolicyConstraintCustom" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustom"></a>

```typescript
public readonly orgPolicyConstraintCustom: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference</a>

---

##### `securityHealthAnalyticsCustomModule`<sup>Required</sup> <a name="securityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModule"></a>

```typescript
public readonly securityHealthAnalyticsCustomModule: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference</a>

---

##### `securityHealthAnalyticsModule`<sup>Required</sup> <a name="securityHealthAnalyticsModule" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModule"></a>

```typescript
public readonly securityHealthAnalyticsModule: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference</a>

---

##### `orgPolicyConstraintCustomInput`<sup>Optional</sup> <a name="orgPolicyConstraintCustomInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustomInput"></a>

```typescript
public readonly orgPolicyConstraintCustomInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

---

##### `orgPolicyConstraintInput`<sup>Optional</sup> <a name="orgPolicyConstraintInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintInput"></a>

```typescript
public readonly orgPolicyConstraintInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

---

##### `securityHealthAnalyticsCustomModuleInput`<sup>Optional</sup> <a name="securityHealthAnalyticsCustomModuleInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModuleInput"></a>

```typescript
public readonly securityHealthAnalyticsCustomModuleInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

---

##### `securityHealthAnalyticsModuleInput`<sup>Optional</sup> <a name="securityHealthAnalyticsModuleInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModuleInput"></a>

```typescript
public readonly securityHealthAnalyticsModuleInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.putProperties"></a>

```typescript
public putProperties(value: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.properties"></a>

```typescript
public readonly properties: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.get"></a>

```typescript
public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>[]

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```typescript
public putValueExpression(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```typescript
public resetValueExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```typescript
public readonly valueExpression: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```typescript
public readonly valueExpressionInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetRecommendation">resetRecommendation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putCustomOutput"></a>

```typescript
public putCustomOutput(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putPredicate"></a>

```typescript
public putPredicate(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putResourceSelector"></a>

```typescript
public putResourceSelector(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetCustomOutput"></a>

```typescript
public resetCustomOutput(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRecommendation` <a name="resetRecommendation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetRecommendation"></a>

```typescript
public resetRecommendation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutput"></a>

```typescript
public readonly customOutput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicate"></a>

```typescript
public readonly predicate: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelector"></a>

```typescript
public readonly resourceSelector: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutputInput"></a>

```typescript
public readonly customOutputInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicateInput"></a>

```typescript
public readonly predicateInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendationInput"></a>

```typescript
public readonly recommendationInput: string;
```

- *Type:* string

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelectorInput"></a>

```typescript
public readonly resourceSelectorInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetModuleEnablementState">resetModuleEnablementState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.putConfig"></a>

```typescript
public putConfig(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetModuleEnablementState` <a name="resetModuleEnablementState" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetModuleEnablementState"></a>

```typescript
public resetModuleEnablementState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementStateInput">moduleEnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementState">moduleEnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.config"></a>

```typescript
public readonly config: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.configInput"></a>

```typescript
public readonly configInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `moduleEnablementStateInput`<sup>Optional</sup> <a name="moduleEnablementStateInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementStateInput"></a>

```typescript
public readonly moduleEnablementStateInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `moduleEnablementState`<sup>Required</sup> <a name="moduleEnablementState" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementState"></a>

```typescript
public readonly moduleEnablementState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resetModuleEnablementState">resetModuleEnablementState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModuleEnablementState` <a name="resetModuleEnablementState" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resetModuleEnablementState"></a>

```typescript
public resetModuleEnablementState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementStateInput">moduleEnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementState">moduleEnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleEnablementStateInput`<sup>Optional</sup> <a name="moduleEnablementStateInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementStateInput"></a>

```typescript
public readonly moduleEnablementStateInput: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `moduleEnablementState`<sup>Required</sup> <a name="moduleEnablementState" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementState"></a>

```typescript
public readonly moduleEnablementState: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

---


### GoogleSecurityposturePosturePolicySetsPoliciesList <a name="GoogleSecurityposturePosturePolicySetsPoliciesList" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.get"></a>

```typescript
public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>[]

---


### GoogleSecurityposturePosturePolicySetsPoliciesOutputReference <a name="GoogleSecurityposturePosturePolicySetsPoliciesOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.putComplianceStandards">putComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.putConstraint">putConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resetComplianceStandards">resetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComplianceStandards` <a name="putComplianceStandards" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.putComplianceStandards"></a>

```typescript
public putComplianceStandards(value: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.putComplianceStandards.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]

---

##### `putConstraint` <a name="putConstraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.putConstraint"></a>

```typescript
public putConstraint(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.putConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a>

---

##### `resetComplianceStandards` <a name="resetComplianceStandards" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resetComplianceStandards"></a>

```typescript
public resetComplianceStandards(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandards">complianceStandards</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandardsInput">complianceStandardsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.constraintInput">constraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList</a>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.constraint"></a>

```typescript
public readonly constraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference">GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference</a>

---

##### `complianceStandardsInput`<sup>Optional</sup> <a name="complianceStandardsInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandardsInput"></a>

```typescript
public readonly complianceStandardsInput: IResolvable | GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards">GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards</a>[]

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: GoogleSecurityposturePosturePolicySetsPoliciesConstraint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesConstraint">GoogleSecurityposturePosturePolicySetsPoliciesConstraint</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePosturePolicySetsPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePosturePolicySetsPolicies">GoogleSecurityposturePosturePolicySetsPolicies</a>

---


### GoogleSecurityposturePostureTimeoutsOutputReference <a name="GoogleSecurityposturePostureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSecurityposturePosture } from '@cdktf/provider-google-beta'

new googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecurityposturePostureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSecurityposturePosture.GoogleSecurityposturePostureTimeouts">GoogleSecurityposturePostureTimeouts</a>

---



