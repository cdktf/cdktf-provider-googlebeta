# `googleDataformRepositoryWorkflowConfig` Submodule <a name="`googleDataformRepositoryWorkflowConfig` Submodule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataformRepositoryWorkflowConfig <a name="GoogleDataformRepositoryWorkflowConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config google_dataform_repository_workflow_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig(scope: Construct, id: string, config: GoogleDataformRepositoryWorkflowConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig">GoogleDataformRepositoryWorkflowConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig">GoogleDataformRepositoryWorkflowConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putInvocationConfig">putInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetInvocationConfig">resetInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInvocationConfig` <a name="putInvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putInvocationConfig"></a>

```typescript
public putInvocationConfig(value: GoogleDataformRepositoryWorkflowConfigInvocationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putInvocationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataformRepositoryWorkflowConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a>

---

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetCronSchedule"></a>

```typescript
public resetCronSchedule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInvocationConfig` <a name="resetInvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetInvocationConfig"></a>

```typescript
public resetInvocationConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataformRepositoryWorkflowConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataformRepositoryWorkflowConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataformRepositoryWorkflowConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataformRepositoryWorkflowConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataformRepositoryWorkflowConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference">GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords">recentScheduledExecutionRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference">GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronScheduleInput">cronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfigInput">invocationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfigInput">releaseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfig">releaseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `invocationConfig`<sup>Required</sup> <a name="invocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfig"></a>

```typescript
public readonly invocationConfig: GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference">GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference</a>

---

##### `recentScheduledExecutionRecords`<sup>Required</sup> <a name="recentScheduledExecutionRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords"></a>

```typescript
public readonly recentScheduledExecutionRecords: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference">GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronScheduleInput"></a>

```typescript
public readonly cronScheduleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invocationConfigInput`<sup>Optional</sup> <a name="invocationConfigInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.invocationConfigInput"></a>

```typescript
public readonly invocationConfigInput: GoogleDataformRepositoryWorkflowConfigInvocationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `releaseConfigInput`<sup>Optional</sup> <a name="releaseConfigInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfigInput"></a>

```typescript
public readonly releaseConfigInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataformRepositoryWorkflowConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.releaseConfig"></a>

```typescript
public readonly releaseConfig: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataformRepositoryWorkflowConfigConfig <a name="GoogleDataformRepositoryWorkflowConfigConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

const googleDataformRepositoryWorkflowConfigConfig: googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.name">name</a></code> | <code>string</code> | The workflow's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.releaseConfig">releaseConfig</a></code> | <code>string</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#id GoogleDataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#project GoogleDataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.region">region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.repository">repository</a></code> | <code>string</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#name GoogleDataformRepositoryWorkflowConfig#name}

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.releaseConfig"></a>

```typescript
public readonly releaseConfig: string;
```

- *Type:* string

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#release_config GoogleDataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#cron_schedule GoogleDataformRepositoryWorkflowConfig#cron_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#id GoogleDataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocationConfig`<sup>Optional</sup> <a name="invocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.invocationConfig"></a>

```typescript
public readonly invocationConfig: GoogleDataformRepositoryWorkflowConfigInvocationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#invocation_config GoogleDataformRepositoryWorkflowConfig#invocation_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#project GoogleDataformRepositoryWorkflowConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#region GoogleDataformRepositoryWorkflowConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#repository GoogleDataformRepositoryWorkflowConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataformRepositoryWorkflowConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#timeouts GoogleDataformRepositoryWorkflowConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#time_zone GoogleDataformRepositoryWorkflowConfig#time_zone}

---

### GoogleDataformRepositoryWorkflowConfigInvocationConfig <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

const googleDataformRepositoryWorkflowConfigInvocationConfig: googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled">fullyRefreshIncrementalTablesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. When set to true, any incremental tables will be fully refreshed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTags">includedTags</a></code> | <code>string[]</code> | Optional. The set of tags to include. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets">includedTargets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]</code> | included_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. The service account to run workflow invocations under. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded">transitiveDependenciesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. When set to true, transitive dependencies of included actions will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded">transitiveDependentsIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. When set to true, transitive dependents of included actions will be executed. |

---

##### `fullyRefreshIncrementalTablesEnabled`<sup>Optional</sup> <a name="fullyRefreshIncrementalTablesEnabled" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled"></a>

```typescript
public readonly fullyRefreshIncrementalTablesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled GoogleDataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

##### `includedTags`<sup>Optional</sup> <a name="includedTags" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTags"></a>

```typescript
public readonly includedTags: string[];
```

- *Type:* string[]

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#included_tags GoogleDataformRepositoryWorkflowConfig#included_tags}

---

##### `includedTargets`<sup>Optional</sup> <a name="includedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets"></a>

```typescript
public readonly includedTargets: IResolvable | GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#included_targets GoogleDataformRepositoryWorkflowConfig#included_targets}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#service_account GoogleDataformRepositoryWorkflowConfig#service_account}

---

##### `transitiveDependenciesIncluded`<sup>Optional</sup> <a name="transitiveDependenciesIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded"></a>

```typescript
public readonly transitiveDependenciesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#transitive_dependencies_included GoogleDataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

##### `transitiveDependentsIncluded`<sup>Optional</sup> <a name="transitiveDependentsIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded"></a>

```typescript
public readonly transitiveDependentsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#transitive_dependents_included GoogleDataformRepositoryWorkflowConfig#transitive_dependents_included}

---

### GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

const googleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets: googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database">database</a></code> | <code>string</code> | The action's database (Google Cloud project ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name">name</a></code> | <code>string</code> | The action's name, within database and schema. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema">schema</a></code> | <code>string</code> | The action's schema (BigQuery dataset ID), within database. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The action's database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#database GoogleDataformRepositoryWorkflowConfig#database}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The action's name, within database and schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#name GoogleDataformRepositoryWorkflowConfig#name}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The action's schema (BigQuery dataset ID), within database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#schema GoogleDataformRepositoryWorkflowConfig#schema}

---

### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

const googleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords: googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords = { ... }
```


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

const googleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus: googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus = { ... }
```


### GoogleDataformRepositoryWorkflowConfigTimeouts <a name="GoogleDataformRepositoryWorkflowConfigTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

const googleDataformRepositoryWorkflowConfigTimeouts: googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#create GoogleDataformRepositoryWorkflowConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#delete GoogleDataformRepositoryWorkflowConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#update GoogleDataformRepositoryWorkflowConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#create GoogleDataformRepositoryWorkflowConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#delete GoogleDataformRepositoryWorkflowConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository_workflow_config#update GoogleDataformRepositoryWorkflowConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get"></a>

```typescript
public get(index: number): GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

---


### GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>

---


### GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference <a name="GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets">putIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled">resetFullyRefreshIncrementalTablesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags">resetIncludedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets">resetIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded">resetTransitiveDependenciesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded">resetTransitiveDependentsIncluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludedTargets` <a name="putIncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets"></a>

```typescript
public putIncludedTargets(value: IResolvable | GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

---

##### `resetFullyRefreshIncrementalTablesEnabled` <a name="resetFullyRefreshIncrementalTablesEnabled" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled"></a>

```typescript
public resetFullyRefreshIncrementalTablesEnabled(): void
```

##### `resetIncludedTags` <a name="resetIncludedTags" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags"></a>

```typescript
public resetIncludedTags(): void
```

##### `resetIncludedTargets` <a name="resetIncludedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets"></a>

```typescript
public resetIncludedTargets(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTransitiveDependenciesIncluded` <a name="resetTransitiveDependenciesIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded"></a>

```typescript
public resetTransitiveDependenciesIncluded(): void
```

##### `resetTransitiveDependentsIncluded` <a name="resetTransitiveDependentsIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded"></a>

```typescript
public resetTransitiveDependentsIncluded(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets">includedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput">fullyRefreshIncrementalTablesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput">includedTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput">includedTargetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput">transitiveDependenciesIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput">transitiveDependentsIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled">fullyRefreshIncrementalTablesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags">includedTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded">transitiveDependenciesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded">transitiveDependentsIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedTargets`<sup>Required</sup> <a name="includedTargets" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets"></a>

```typescript
public readonly includedTargets: GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a>

---

##### `fullyRefreshIncrementalTablesEnabledInput`<sup>Optional</sup> <a name="fullyRefreshIncrementalTablesEnabledInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput"></a>

```typescript
public readonly fullyRefreshIncrementalTablesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includedTagsInput`<sup>Optional</sup> <a name="includedTagsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput"></a>

```typescript
public readonly includedTagsInput: string[];
```

- *Type:* string[]

---

##### `includedTargetsInput`<sup>Optional</sup> <a name="includedTargetsInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput"></a>

```typescript
public readonly includedTargetsInput: IResolvable | GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `transitiveDependenciesIncludedInput`<sup>Optional</sup> <a name="transitiveDependenciesIncludedInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput"></a>

```typescript
public readonly transitiveDependenciesIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transitiveDependentsIncludedInput`<sup>Optional</sup> <a name="transitiveDependentsIncludedInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput"></a>

```typescript
public readonly transitiveDependentsIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fullyRefreshIncrementalTablesEnabled`<sup>Required</sup> <a name="fullyRefreshIncrementalTablesEnabled" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled"></a>

```typescript
public readonly fullyRefreshIncrementalTablesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includedTags`<sup>Required</sup> <a name="includedTags" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags"></a>

```typescript
public readonly includedTags: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `transitiveDependenciesIncluded`<sup>Required</sup> <a name="transitiveDependenciesIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded"></a>

```typescript
public readonly transitiveDependenciesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transitiveDependentsIncluded`<sup>Required</sup> <a name="transitiveDependentsIncluded" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded"></a>

```typescript
public readonly transitiveDependentsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataformRepositoryWorkflowConfigInvocationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigInvocationConfig">GoogleDataformRepositoryWorkflowConfigInvocationConfig</a>

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get"></a>

```typescript
public get(index: number): GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a>

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get"></a>

```typescript
public get(index: number): GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference <a name="GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime">executionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation">workflowInvocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus"></a>

```typescript
public readonly errorStatus: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a>

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime"></a>

```typescript
public readonly executionTime: string;
```

- *Type:* string

---

##### `workflowInvocation`<sup>Required</sup> <a name="workflowInvocation" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation"></a>

```typescript
public readonly workflowInvocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a>

---


### GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference <a name="GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataformRepositoryWorkflowConfig } from '@cdktf/provider-google-beta'

new googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataformRepositoryWorkflowConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataformRepositoryWorkflowConfig.GoogleDataformRepositoryWorkflowConfigTimeouts">GoogleDataformRepositoryWorkflowConfigTimeouts</a>

---



