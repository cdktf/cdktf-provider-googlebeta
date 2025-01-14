# `googleDataFusionInstanceIamMember` Submodule <a name="`googleDataFusionInstanceIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataFusionInstanceIamMember <a name="GoogleDataFusionInstanceIamMember" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member google_data_fusion_instance_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

new googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember(scope: Construct, id: string, config: GoogleDataFusionInstanceIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig">GoogleDataFusionInstanceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig">GoogleDataFusionInstanceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleDataFusionInstanceIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataFusionInstanceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isConstruct"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformElement"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformResource"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataFusionInstanceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataFusionInstanceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataFusionInstanceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataFusionInstanceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference">GoogleDataFusionInstanceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleDataFusionInstanceIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference">GoogleDataFusionInstanceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDataFusionInstanceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataFusionInstanceIamMemberCondition <a name="GoogleDataFusionInstanceIamMemberCondition" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.Initializer"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceIamMemberCondition: googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#expression GoogleDataFusionInstanceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#title GoogleDataFusionInstanceIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#description GoogleDataFusionInstanceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#expression GoogleDataFusionInstanceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#title GoogleDataFusionInstanceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#description GoogleDataFusionInstanceIamMember#description}.

---

### GoogleDataFusionInstanceIamMemberConfig <a name="GoogleDataFusionInstanceIamMemberConfig" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.Initializer"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

const googleDataFusionInstanceIamMemberConfig: googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#member GoogleDataFusionInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#name GoogleDataFusionInstanceIamMember#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#role GoogleDataFusionInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#id GoogleDataFusionInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#project GoogleDataFusionInstanceIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#region GoogleDataFusionInstanceIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#member GoogleDataFusionInstanceIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#name GoogleDataFusionInstanceIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#role GoogleDataFusionInstanceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDataFusionInstanceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#condition GoogleDataFusionInstanceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#id GoogleDataFusionInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#project GoogleDataFusionInstanceIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_fusion_instance_iam_member#region GoogleDataFusionInstanceIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataFusionInstanceIamMemberConditionOutputReference <a name="GoogleDataFusionInstanceIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleDataFusionInstanceIamMember } from '@cdktf/provider-google-beta'

new googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataFusionInstanceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstanceIamMember.GoogleDataFusionInstanceIamMemberCondition">GoogleDataFusionInstanceIamMemberCondition</a>

---



