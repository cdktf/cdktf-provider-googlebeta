# `google_data_loss_prevention_job_trigger`

Refer to the Terraform Registory for docs: [`google_data_loss_prevention_job_trigger`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger).

# `googleDataLossPreventionJobTrigger` Submodule <a name="`googleDataLossPreventionJobTrigger` Submodule" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLossPreventionJobTrigger <a name="GoogleDataLossPreventionJobTrigger" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger google_data_loss_prevention_job_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger(scope: Construct, id: string, config: GoogleDataLossPreventionJobTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig">GoogleDataLossPreventionJobTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig">GoogleDataLossPreventionJobTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putInspectJob">putInspectJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putTriggers">putTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetInspectJob">resetInspectJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInspectJob` <a name="putInspectJob" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putInspectJob"></a>

```typescript
public putInspectJob(value: GoogleDataLossPreventionJobTriggerInspectJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putInspectJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataLossPreventionJobTriggerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a>

---

##### `putTriggers` <a name="putTriggers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putTriggers"></a>

```typescript
public putTriggers(value: IResolvable | GoogleDataLossPreventionJobTriggerTriggers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.putTriggers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInspectJob` <a name="resetInspectJob" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetInspectJob"></a>

```typescript
public resetInspectJob(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isConstruct"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformElement"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformResource"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.inspectJob">inspectJob</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference">GoogleDataLossPreventionJobTriggerInspectJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.lastRunTime">lastRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference">GoogleDataLossPreventionJobTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.triggers">triggers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList">GoogleDataLossPreventionJobTriggerTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.inspectJobInput">inspectJobInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.triggersInput">triggersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inspectJob`<sup>Required</sup> <a name="inspectJob" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.inspectJob"></a>

```typescript
public readonly inspectJob: GoogleDataLossPreventionJobTriggerInspectJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference">GoogleDataLossPreventionJobTriggerInspectJobOutputReference</a>

---

##### `lastRunTime`<sup>Required</sup> <a name="lastRunTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.lastRunTime"></a>

```typescript
public readonly lastRunTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataLossPreventionJobTriggerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference">GoogleDataLossPreventionJobTriggerTimeoutsOutputReference</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.triggers"></a>

```typescript
public readonly triggers: GoogleDataLossPreventionJobTriggerTriggersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList">GoogleDataLossPreventionJobTriggerTriggersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inspectJobInput`<sup>Optional</sup> <a name="inspectJobInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.inspectJobInput"></a>

```typescript
public readonly inspectJobInput: GoogleDataLossPreventionJobTriggerInspectJob;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleDataLossPreventionJobTriggerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a> | cdktf.IResolvable

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.triggersInput"></a>

```typescript
public readonly triggersInput: IResolvable | GoogleDataLossPreventionJobTriggerTriggers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLossPreventionJobTriggerConfig <a name="GoogleDataLossPreventionJobTriggerConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerConfig: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the trigger, either in the format 'projects/{{project}}' or 'projects/{{project}}/locations/{{location}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.triggers">triggers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]</code> | triggers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.description">description</a></code> | <code>string</code> | A description of the job trigger. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.displayName">displayName</a></code> | <code>string</code> | User set display name of the job trigger. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#id GoogleDataLossPreventionJobTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.inspectJob">inspectJob</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a></code> | inspect_job block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.status">status</a></code> | <code>string</code> | Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the trigger, either in the format 'projects/{{project}}' or 'projects/{{project}}/locations/{{location}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#parent GoogleDataLossPreventionJobTrigger#parent}

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.triggers"></a>

```typescript
public readonly triggers: IResolvable | GoogleDataLossPreventionJobTriggerTriggers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#triggers GoogleDataLossPreventionJobTrigger#triggers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the job trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#description GoogleDataLossPreventionJobTrigger#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User set display name of the job trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#display_name GoogleDataLossPreventionJobTrigger#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#id GoogleDataLossPreventionJobTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspectJob`<sup>Optional</sup> <a name="inspectJob" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.inspectJob"></a>

```typescript
public readonly inspectJob: GoogleDataLossPreventionJobTriggerInspectJob;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a>

inspect_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#inspect_job GoogleDataLossPreventionJobTrigger#inspect_job}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#status GoogleDataLossPreventionJobTrigger#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataLossPreventionJobTriggerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#timeouts GoogleDataLossPreventionJobTrigger#timeouts}

---

### GoogleDataLossPreventionJobTriggerInspectJob <a name="GoogleDataLossPreventionJobTriggerInspectJob" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJob: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.property.inspectTemplateName">inspectTemplateName</a></code> | <code>string</code> | The name of the template to run when this job is triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a></code> | storage_config block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.property.actions"></a>

```typescript
public readonly actions: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#actions GoogleDataLossPreventionJobTrigger#actions}

---

##### `inspectTemplateName`<sup>Required</sup> <a name="inspectTemplateName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.property.inspectTemplateName"></a>

```typescript
public readonly inspectTemplateName: string;
```

- *Type:* string

The name of the template to run when this job is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#inspect_template_name GoogleDataLossPreventionJobTrigger#inspect_template_name}

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob.property.storageConfig"></a>

```typescript
public readonly storageConfig: GoogleDataLossPreventionJobTriggerInspectJobStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#storage_config GoogleDataLossPreventionJobTrigger#storage_config}

---

### GoogleDataLossPreventionJobTriggerInspectJobActions <a name="GoogleDataLossPreventionJobTriggerInspectJobActions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActions: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.deidentify">deidentify</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a></code> | deidentify block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.jobNotificationEmails">jobNotificationEmails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a></code> | job_notification_emails block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.publishFindingsToCloudDataCatalog">publishFindingsToCloudDataCatalog</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a></code> | publish_findings_to_cloud_data_catalog block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.publishSummaryToCscc">publishSummaryToCscc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a></code> | publish_summary_to_cscc block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.saveFindings">saveFindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a></code> | save_findings block. |

---

##### `deidentify`<sup>Optional</sup> <a name="deidentify" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.deidentify"></a>

```typescript
public readonly deidentify: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

deidentify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#deidentify GoogleDataLossPreventionJobTrigger#deidentify}

---

##### `jobNotificationEmails`<sup>Optional</sup> <a name="jobNotificationEmails" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.jobNotificationEmails"></a>

```typescript
public readonly jobNotificationEmails: GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

job_notification_emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#job_notification_emails GoogleDataLossPreventionJobTrigger#job_notification_emails}

---

##### `publishFindingsToCloudDataCatalog`<sup>Optional</sup> <a name="publishFindingsToCloudDataCatalog" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.publishFindingsToCloudDataCatalog"></a>

```typescript
public readonly publishFindingsToCloudDataCatalog: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

publish_findings_to_cloud_data_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#publish_findings_to_cloud_data_catalog GoogleDataLossPreventionJobTrigger#publish_findings_to_cloud_data_catalog}

---

##### `publishSummaryToCscc`<sup>Optional</sup> <a name="publishSummaryToCscc" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.publishSummaryToCscc"></a>

```typescript
public readonly publishSummaryToCscc: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

publish_summary_to_cscc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#publish_summary_to_cscc GoogleDataLossPreventionJobTrigger#publish_summary_to_cscc}

---

##### `pubSub`<sup>Optional</sup> <a name="pubSub" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.pubSub"></a>

```typescript
public readonly pubSub: GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#pub_sub GoogleDataLossPreventionJobTrigger#pub_sub}

---

##### `saveFindings`<sup>Optional</sup> <a name="saveFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions.property.saveFindings"></a>

```typescript
public readonly saveFindings: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

save_findings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#save_findings GoogleDataLossPreventionJobTrigger#save_findings}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsDeidentify: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.cloudStorageOutput">cloudStorageOutput</a></code> | <code>string</code> | User settable Cloud Storage bucket and folders to store de-identified files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.fileTypesToTransform">fileTypesToTransform</a></code> | <code>string[]</code> | List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationConfig">transformationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a></code> | transformation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationDetailsStorageConfig">transformationDetailsStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a></code> | transformation_details_storage_config block. |

---

##### `cloudStorageOutput`<sup>Required</sup> <a name="cloudStorageOutput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.cloudStorageOutput"></a>

```typescript
public readonly cloudStorageOutput: string;
```

- *Type:* string

User settable Cloud Storage bucket and folders to store de-identified files.

This field must be set for cloud storage deidentification.

The output Cloud Storage bucket must be different from the input bucket.

De-identified files will overwrite files in the output path.

Form of: gs://bucket/folder/ or gs://bucket

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#cloud_storage_output GoogleDataLossPreventionJobTrigger#cloud_storage_output}

---

##### `fileTypesToTransform`<sup>Optional</sup> <a name="fileTypesToTransform" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.fileTypesToTransform"></a>

```typescript
public readonly fileTypesToTransform: string[];
```

- *Type:* string[]

List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed.

If empty, all supported files will be transformed. Supported types may be automatically added over time. 

If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started. Possible values: ["IMAGE", "TEXT_FILE", "CSV", "TSV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#file_types_to_transform GoogleDataLossPreventionJobTrigger#file_types_to_transform}

---

##### `transformationConfig`<sup>Optional</sup> <a name="transformationConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationConfig"></a>

```typescript
public readonly transformationConfig: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#transformation_config GoogleDataLossPreventionJobTrigger#transformation_config}

---

##### `transformationDetailsStorageConfig`<sup>Optional</sup> <a name="transformationDetailsStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationDetailsStorageConfig"></a>

```typescript
public readonly transformationDetailsStorageConfig: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

transformation_details_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#transformation_details_storage_config GoogleDataLossPreventionJobTrigger#transformation_details_storage_config}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | If this template is specified, it will serve as the default de-identify template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.imageRedactTemplate">imageRedactTemplate</a></code> | <code>string</code> | If this template is specified, it will serve as the de-identify template for images. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.structuredDeidentifyTemplate">structuredDeidentifyTemplate</a></code> | <code>string</code> | If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

If this template is specified, it will serve as the default de-identify template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#deidentify_template GoogleDataLossPreventionJobTrigger#deidentify_template}

---

##### `imageRedactTemplate`<sup>Optional</sup> <a name="imageRedactTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.imageRedactTemplate"></a>

```typescript
public readonly imageRedactTemplate: string;
```

- *Type:* string

If this template is specified, it will serve as the de-identify template for images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#image_redact_template GoogleDataLossPreventionJobTrigger#image_redact_template}

---

##### `structuredDeidentifyTemplate`<sup>Optional</sup> <a name="structuredDeidentifyTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.structuredDeidentifyTemplate"></a>

```typescript
public readonly structuredDeidentifyTemplate: string;
```

- *Type:* string

If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#structured_deidentify_template GoogleDataLossPreventionJobTrigger#structured_deidentify_template}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a></code> | table block. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig.property.table"></a>

```typescript
public readonly table: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table GoogleDataLossPreventionJobTrigger#table}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.tableId">tableId</a></code> | <code>string</code> | The ID of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#dataset_id GoogleDataLossPreventionJobTrigger#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#project_id GoogleDataLossPreventionJobTrigger#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table_id GoogleDataLossPreventionJobTrigger#table_id}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails = { ... }
```


### GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog = { ... }
```


### GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc = { ... }
```


### GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsPubSub: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub.property.topic">topic</a></code> | <code>string</code> | Cloud Pub/Sub topic to send notifications to. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Cloud Pub/Sub topic to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#topic GoogleDataLossPreventionJobTrigger#topic}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsSaveFindings: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a></code> | output_config block. |

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings.property.outputConfig"></a>

```typescript
public readonly outputConfig: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#output_config GoogleDataLossPreventionJobTrigger#output_config}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.outputSchema">outputSchema</a></code> | <code>string</code> | Schema used for writing the findings for Inspect jobs. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.table"></a>

```typescript
public readonly table: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table GoogleDataLossPreventionJobTrigger#table}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

Schema used for writing the findings for Inspect jobs.

This field is only used for
Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
object. If appending to an existing table, any columns from the predefined schema
that are missing will be added. No columns in the existing table will be deleted.

If unspecified, then all available columns will be used for a new table or an (existing)
table with no schema, and no changes will be made to an existing table that has a schema.
Only for use with external storage. Possible values: ["BASIC_COLUMNS", "GCS_COLUMNS", "DATASTORE_COLUMNS", "BIG_QUERY_COLUMNS", "ALL_COLUMNS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#output_schema GoogleDataLossPreventionJobTrigger#output_schema}

---

### GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.datasetId">datasetId</a></code> | <code>string</code> | Dataset ID of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.projectId">projectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.tableId">tableId</a></code> | <code>string</code> | Name of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#dataset_id GoogleDataLossPreventionJobTrigger#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#project_id GoogleDataLossPreventionJobTrigger#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Name of the table.

If is not set a new one will be generated for you with the following format:
'dlp_googleapis_yyyy_mm_dd_[dlp_job_id]'. Pacific timezone will be used for generating the date details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table_id GoogleDataLossPreventionJobTrigger#table_id}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfig <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfig: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.bigQueryOptions">bigQueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a></code> | big_query_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.cloudStorageOptions">cloudStorageOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a></code> | cloud_storage_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.datastoreOptions">datastoreOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a></code> | datastore_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.hybridOptions">hybridOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a></code> | hybrid_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.timespanConfig">timespanConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a></code> | timespan_config block. |

---

##### `bigQueryOptions`<sup>Optional</sup> <a name="bigQueryOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.bigQueryOptions"></a>

```typescript
public readonly bigQueryOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

big_query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#big_query_options GoogleDataLossPreventionJobTrigger#big_query_options}

---

##### `cloudStorageOptions`<sup>Optional</sup> <a name="cloudStorageOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.cloudStorageOptions"></a>

```typescript
public readonly cloudStorageOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

cloud_storage_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#cloud_storage_options GoogleDataLossPreventionJobTrigger#cloud_storage_options}

---

##### `datastoreOptions`<sup>Optional</sup> <a name="datastoreOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.datastoreOptions"></a>

```typescript
public readonly datastoreOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

datastore_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#datastore_options GoogleDataLossPreventionJobTrigger#datastore_options}

---

##### `hybridOptions`<sup>Optional</sup> <a name="hybridOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.hybridOptions"></a>

```typescript
public readonly hybridOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

hybrid_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#hybrid_options GoogleDataLossPreventionJobTrigger#hybrid_options}

---

##### `timespanConfig`<sup>Optional</sup> <a name="timespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig.property.timespanConfig"></a>

```typescript
public readonly timespanConfig: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

timespan_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#timespan_config GoogleDataLossPreventionJobTrigger#timespan_config}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.tableReference">tableReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a></code> | table_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.identifyingFields">identifyingFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]</code> | identifying_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimit">rowsLimit</a></code> | <code>number</code> | Max number of rows to scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimitPercent">rowsLimitPercent</a></code> | <code>number</code> | Max percentage of rows to scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | How to sample rows if not all rows are scanned. |

---

##### `tableReference`<sup>Required</sup> <a name="tableReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.tableReference"></a>

```typescript
public readonly tableReference: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

table_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table_reference GoogleDataLossPreventionJobTrigger#table_reference}

---

##### `identifyingFields`<sup>Optional</sup> <a name="identifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

identifying_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#identifying_fields GoogleDataLossPreventionJobTrigger#identifying_fields}

---

##### `rowsLimit`<sup>Optional</sup> <a name="rowsLimit" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimit"></a>

```typescript
public readonly rowsLimit: number;
```

- *Type:* number

Max number of rows to scan.

If the table has more rows than this value, the rest of the rows are omitted. 
If not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be 
specified. Cannot be used in conjunction with TimespanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#rows_limit GoogleDataLossPreventionJobTrigger#rows_limit}

---

##### `rowsLimitPercent`<sup>Optional</sup> <a name="rowsLimitPercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimitPercent"></a>

```typescript
public readonly rowsLimitPercent: number;
```

- *Type:* number

Max percentage of rows to scan.

The rest are omitted. The number of rows scanned is rounded down. 
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of 
rowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#rows_limit_percent GoogleDataLossPreventionJobTrigger#rows_limit_percent}

---

##### `sampleMethod`<sup>Optional</sup> <a name="sampleMethod" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

How to sample rows if not all rows are scanned.

Meaningful only when used in conjunction with either 
rowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them. Default value: "TOP" Possible values: ["TOP", "RANDOM_START"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#sample_method GoogleDataLossPreventionJobTrigger#sample_method}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields.property.name">name</a></code> | <code>string</code> | Name of a BigQuery field to be returned with the findings. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of a BigQuery field to be returned with the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#name GoogleDataLossPreventionJobTrigger#name}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.datasetId">datasetId</a></code> | <code>string</code> | The dataset ID of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.projectId">projectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.tableId">tableId</a></code> | <code>string</code> | The name of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#dataset_id GoogleDataLossPreventionJobTrigger#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#project_id GoogleDataLossPreventionJobTrigger#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table_id GoogleDataLossPreventionJobTrigger#table_id}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileSet">fileSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a></code> | file_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFile">bytesLimitPerFile</a></code> | <code>number</code> | Max number of bytes to scan from a file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFilePercent">bytesLimitPerFilePercent</a></code> | <code>number</code> | Max percentage of bytes to scan from a file. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.filesLimitPercent">filesLimitPercent</a></code> | <code>number</code> | Limits the number of files to scan to this percentage of the input FileSet. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | List of file type groups to include in the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | How to sample bytes if not all bytes are scanned. |

---

##### `fileSet`<sup>Required</sup> <a name="fileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileSet"></a>

```typescript
public readonly fileSet: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#file_set GoogleDataLossPreventionJobTrigger#file_set}

---

##### `bytesLimitPerFile`<sup>Optional</sup> <a name="bytesLimitPerFile" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFile"></a>

```typescript
public readonly bytesLimitPerFile: number;
```

- *Type:* number

Max number of bytes to scan from a file.

If a scanned file's size is bigger than this value
then the rest of the bytes are omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#bytes_limit_per_file GoogleDataLossPreventionJobTrigger#bytes_limit_per_file}

---

##### `bytesLimitPerFilePercent`<sup>Optional</sup> <a name="bytesLimitPerFilePercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFilePercent"></a>

```typescript
public readonly bytesLimitPerFilePercent: number;
```

- *Type:* number

Max percentage of bytes to scan from a file.

The rest are omitted. The number of bytes scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#bytes_limit_per_file_percent GoogleDataLossPreventionJobTrigger#bytes_limit_per_file_percent}

---

##### `filesLimitPercent`<sup>Optional</sup> <a name="filesLimitPercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.filesLimitPercent"></a>

```typescript
public readonly filesLimitPercent: number;
```

- *Type:* number

Limits the number of files to scan to this percentage of the input FileSet.

Number of files scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#files_limit_percent GoogleDataLossPreventionJobTrigger#files_limit_percent}

---

##### `fileTypes`<sup>Optional</sup> <a name="fileTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

List of file type groups to include in the scan.

If empty, all files are scanned and available data
format processors are applied. In addition, the binary content of the selected files is always scanned as well.
Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified. Possible values: ["BINARY_FILE", "TEXT_FILE", "IMAGE", "WORD", "PDF", "AVRO", "CSV", "TSV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#file_types GoogleDataLossPreventionJobTrigger#file_types}

---

##### `sampleMethod`<sup>Optional</sup> <a name="sampleMethod" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

How to sample bytes if not all bytes are scanned.

Meaningful only when used in conjunction with bytesLimitPerFile.
If not specified, scanning would start from the top. Possible values: ["TOP", "RANDOM_START"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#sample_method GoogleDataLossPreventionJobTrigger#sample_method}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.regexFileSet">regexFileSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a></code> | regex_file_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.url">url</a></code> | <code>string</code> | The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed. |

---

##### `regexFileSet`<sup>Optional</sup> <a name="regexFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.regexFileSet"></a>

```typescript
public readonly regexFileSet: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

regex_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#regex_file_set GoogleDataLossPreventionJobTrigger#regex_file_set}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
non-recursively (content in sub-directories will not be scanned). This means that 'gs://mybucket/' is
equivalent to 'gs://mybucket/*', and 'gs://mybucket/directory/' is equivalent to 'gs://mybucket/directory/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#url GoogleDataLossPreventionJobTrigger#url}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.bucketName">bucketName</a></code> | <code>string</code> | The name of a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.excludeRegex">excludeRegex</a></code> | <code>string[]</code> | A list of regular expressions matching file paths to exclude. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.includeRegex">includeRegex</a></code> | <code>string[]</code> | A list of regular expressions matching file paths to include. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#bucket_name GoogleDataLossPreventionJobTrigger#bucket_name}

---

##### `excludeRegex`<sup>Optional</sup> <a name="excludeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.excludeRegex"></a>

```typescript
public readonly excludeRegex: string[];
```

- *Type:* string[]

A list of regular expressions matching file paths to exclude.

All files in the bucket that match at
least one of these regular expressions will be excluded from the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#exclude_regex GoogleDataLossPreventionJobTrigger#exclude_regex}

---

##### `includeRegex`<sup>Optional</sup> <a name="includeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.includeRegex"></a>

```typescript
public readonly includeRegex: string[];
```

- *Type:* string[]

A list of regular expressions matching file paths to include.

All files in the bucket
that match at least one of these regular expressions will be included in the set of files,
except for those that also match an item in excludeRegex. Leaving this field empty will
match all files by default (this is equivalent to including .* in the list)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#include_regex GoogleDataLossPreventionJobTrigger#include_regex}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.kind">kind</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a></code> | kind block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.partitionId">partitionId</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a></code> | partition_id block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.kind"></a>

```typescript
public readonly kind: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

kind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#kind GoogleDataLossPreventionJobTrigger#kind}

---

##### `partitionId`<sup>Required</sup> <a name="partitionId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.partitionId"></a>

```typescript
public readonly partitionId: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

partition_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#partition_id GoogleDataLossPreventionJobTrigger#partition_id}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind.property.name">name</a></code> | <code>string</code> | The name of the Datastore kind. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Datastore kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#name GoogleDataLossPreventionJobTrigger#name}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project to which the entities belong. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.namespaceId">namespaceId</a></code> | <code>string</code> | If not empty, the ID of the namespace to which the entities belong. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project to which the entities belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#project_id GoogleDataLossPreventionJobTrigger#project_id}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

If not empty, the ID of the namespace to which the entities belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#namespace_id GoogleDataLossPreventionJobTrigger#namespace_id}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.description">description</a></code> | <code>string</code> | A short description of where the data is coming from. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | To organize findings, these labels will be added to each finding. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.requiredFindingLabelKeys">requiredFindingLabelKeys</a></code> | <code>string[]</code> | These are labels that each inspection request must include within their 'finding_labels' map. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.tableOptions">tableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a></code> | table_options block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of where the data is coming from.

Will be stored once in the job. 256 max length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#description GoogleDataLossPreventionJobTrigger#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

To organize findings, these labels will be added to each finding.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: '[a-z]([-a-z0-9]*[a-z0-9])?'.

Label values must be between 0 and 63 characters long and must conform to the regular expression '([a-z]([-a-z0-9]*[a-z0-9])?)?'.

No more than 10 labels can be associated with a given finding.

Examples:
'"environment" : "production"'
'"pipeline" : "etl"'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#labels GoogleDataLossPreventionJobTrigger#labels}

---

##### `requiredFindingLabelKeys`<sup>Optional</sup> <a name="requiredFindingLabelKeys" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.requiredFindingLabelKeys"></a>

```typescript
public readonly requiredFindingLabelKeys: string[];
```

- *Type:* string[]

These are labels that each inspection request must include within their 'finding_labels' map.

Request
may contain others, but any missing one of these will be rejected.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: '[a-z]([-a-z0-9]*[a-z0-9])?'.

No more than 10 keys can be required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#required_finding_label_keys GoogleDataLossPreventionJobTrigger#required_finding_label_keys}

---

##### `tableOptions`<sup>Optional</sup> <a name="tableOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.tableOptions"></a>

```typescript
public readonly tableOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

table_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#table_options GoogleDataLossPreventionJobTrigger#table_options}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions.property.identifyingFields">identifyingFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]</code> | identifying_fields block. |

---

##### `identifyingFields`<sup>Optional</sup> <a name="identifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

identifying_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#identifying_fields GoogleDataLossPreventionJobTrigger#identifying_fields}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields.property.name">name</a></code> | <code>string</code> | Name describing the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#name GoogleDataLossPreventionJobTrigger#name}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.timestampField">timestampField</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a></code> | timestamp_field block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.enableAutoPopulationOfTimespanConfig">enableAutoPopulationOfTimespanConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid scanning files that have not been modified since the last time the JobTrigger executed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.endTime">endTime</a></code> | <code>string</code> | Exclude files or rows newer than this value. If set to zero, no upper time limit is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.startTime">startTime</a></code> | <code>string</code> | Exclude files or rows older than this value. |

---

##### `timestampField`<sup>Required</sup> <a name="timestampField" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.timestampField"></a>

```typescript
public readonly timestampField: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

timestamp_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#timestamp_field GoogleDataLossPreventionJobTrigger#timestamp_field}

---

##### `enableAutoPopulationOfTimespanConfig`<sup>Optional</sup> <a name="enableAutoPopulationOfTimespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.enableAutoPopulationOfTimespanConfig"></a>

```typescript
public readonly enableAutoPopulationOfTimespanConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid scanning files that have not been modified since the last time the JobTrigger executed.

This will
be based on the time of the execution of the last run of the JobTrigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#enable_auto_population_of_timespan_config GoogleDataLossPreventionJobTrigger#enable_auto_population_of_timespan_config}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Exclude files or rows newer than this value. If set to zero, no upper time limit is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#end_time GoogleDataLossPreventionJobTrigger#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Exclude files or rows older than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#start_time GoogleDataLossPreventionJobTrigger#start_time}

---

### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField.property.name">name</a></code> | <code>string</code> | Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery.

For BigQuery: Required to filter out rows based on the given start and end times. If not specified and the table was
modified between the given start and end times, the entire table will be scanned. The valid data types of the timestamp
field are: INTEGER, DATE, TIMESTAMP, or DATETIME BigQuery column.

For Datastore. Valid data types of the timestamp field are: TIMESTAMP. Datastore entity will be scanned if the
timestamp property does not exist or its value is empty or invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#name GoogleDataLossPreventionJobTrigger#name}

---

### GoogleDataLossPreventionJobTriggerTimeouts <a name="GoogleDataLossPreventionJobTriggerTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerTimeouts: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#create GoogleDataLossPreventionJobTrigger#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#delete GoogleDataLossPreventionJobTrigger#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#update GoogleDataLossPreventionJobTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#create GoogleDataLossPreventionJobTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#delete GoogleDataLossPreventionJobTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#update GoogleDataLossPreventionJobTrigger#update}.

---

### GoogleDataLossPreventionJobTriggerTriggers <a name="GoogleDataLossPreventionJobTriggerTriggers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerTriggers: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a></code> | manual block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a></code> | schedule block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers.property.manual"></a>

```typescript
public readonly manual: GoogleDataLossPreventionJobTriggerTriggersManual;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#manual GoogleDataLossPreventionJobTrigger#manual}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers.property.schedule"></a>

```typescript
public readonly schedule: GoogleDataLossPreventionJobTriggerTriggersSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#schedule GoogleDataLossPreventionJobTrigger#schedule}

---

### GoogleDataLossPreventionJobTriggerTriggersManual <a name="GoogleDataLossPreventionJobTriggerTriggersManual" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerTriggersManual: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual = { ... }
```


### GoogleDataLossPreventionJobTriggerTriggersSchedule <a name="GoogleDataLossPreventionJobTriggerTriggersSchedule" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

const googleDataLossPreventionJobTriggerTriggersSchedule: googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule.property.recurrencePeriodDuration">recurrencePeriodDuration</a></code> | <code>string</code> | With this option a job is started a regular periodic basis. For example: every day (86400 seconds). |

---

##### `recurrencePeriodDuration`<sup>Optional</sup> <a name="recurrencePeriodDuration" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule.property.recurrencePeriodDuration"></a>

```typescript
public readonly recurrencePeriodDuration: string;
```

- *Type:* string

With this option a job is started a regular periodic basis. For example: every day (86400 seconds).

A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.

This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_data_loss_prevention_job_trigger#recurrence_period_duration GoogleDataLossPreventionJobTrigger#recurrence_period_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationConfig">putTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationDetailsStorageConfig">putTransformationDetailsStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetFileTypesToTransform">resetFileTypesToTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationConfig">resetTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationDetailsStorageConfig">resetTransformationDetailsStorageConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformationConfig` <a name="putTransformationConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationConfig"></a>

```typescript
public putTransformationConfig(value: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

---

##### `putTransformationDetailsStorageConfig` <a name="putTransformationDetailsStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationDetailsStorageConfig"></a>

```typescript
public putTransformationDetailsStorageConfig(value: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationDetailsStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

---

##### `resetFileTypesToTransform` <a name="resetFileTypesToTransform" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetFileTypesToTransform"></a>

```typescript
public resetFileTypesToTransform(): void
```

##### `resetTransformationConfig` <a name="resetTransformationConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationConfig"></a>

```typescript
public resetTransformationConfig(): void
```

##### `resetTransformationDetailsStorageConfig` <a name="resetTransformationDetailsStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationDetailsStorageConfig"></a>

```typescript
public resetTransformationDetailsStorageConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfig">transformationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfig">transformationDetailsStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutputInput">cloudStorageOutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransformInput">fileTypesToTransformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfigInput">transformationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfigInput">transformationDetailsStorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutput">cloudStorageOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransform">fileTypesToTransform</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformationConfig`<sup>Required</sup> <a name="transformationConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfig"></a>

```typescript
public readonly transformationConfig: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference</a>

---

##### `transformationDetailsStorageConfig`<sup>Required</sup> <a name="transformationDetailsStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfig"></a>

```typescript
public readonly transformationDetailsStorageConfig: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference</a>

---

##### `cloudStorageOutputInput`<sup>Optional</sup> <a name="cloudStorageOutputInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutputInput"></a>

```typescript
public readonly cloudStorageOutputInput: string;
```

- *Type:* string

---

##### `fileTypesToTransformInput`<sup>Optional</sup> <a name="fileTypesToTransformInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransformInput"></a>

```typescript
public readonly fileTypesToTransformInput: string[];
```

- *Type:* string[]

---

##### `transformationConfigInput`<sup>Optional</sup> <a name="transformationConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfigInput"></a>

```typescript
public readonly transformationConfigInput: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

---

##### `transformationDetailsStorageConfigInput`<sup>Optional</sup> <a name="transformationDetailsStorageConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfigInput"></a>

```typescript
public readonly transformationDetailsStorageConfigInput: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

---

##### `cloudStorageOutput`<sup>Required</sup> <a name="cloudStorageOutput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutput"></a>

```typescript
public readonly cloudStorageOutput: string;
```

- *Type:* string

---

##### `fileTypesToTransform`<sup>Required</sup> <a name="fileTypesToTransform" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransform"></a>

```typescript
public readonly fileTypesToTransform: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetImageRedactTemplate">resetImageRedactTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetStructuredDeidentifyTemplate">resetStructuredDeidentifyTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetDeidentifyTemplate"></a>

```typescript
public resetDeidentifyTemplate(): void
```

##### `resetImageRedactTemplate` <a name="resetImageRedactTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetImageRedactTemplate"></a>

```typescript
public resetImageRedactTemplate(): void
```

##### `resetStructuredDeidentifyTemplate` <a name="resetStructuredDeidentifyTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetStructuredDeidentifyTemplate"></a>

```typescript
public resetStructuredDeidentifyTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplateInput">imageRedactTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplateInput">structuredDeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplate">imageRedactTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplate">structuredDeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplateInput"></a>

```typescript
public readonly deidentifyTemplateInput: string;
```

- *Type:* string

---

##### `imageRedactTemplateInput`<sup>Optional</sup> <a name="imageRedactTemplateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplateInput"></a>

```typescript
public readonly imageRedactTemplateInput: string;
```

- *Type:* string

---

##### `structuredDeidentifyTemplateInput`<sup>Optional</sup> <a name="structuredDeidentifyTemplateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplateInput"></a>

```typescript
public readonly structuredDeidentifyTemplateInput: string;
```

- *Type:* string

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

---

##### `imageRedactTemplate`<sup>Required</sup> <a name="imageRedactTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplate"></a>

```typescript
public readonly imageRedactTemplate: string;
```

- *Type:* string

---

##### `structuredDeidentifyTemplate`<sup>Required</sup> <a name="structuredDeidentifyTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplate"></a>

```typescript
public readonly structuredDeidentifyTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.putTable">putTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTable` <a name="putTable" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.putTable"></a>

```typescript
public putTable(value: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.table"></a>

```typescript
public readonly table: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsList <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsList" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putDeidentify">putDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putJobNotificationEmails">putJobNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishFindingsToCloudDataCatalog">putPublishFindingsToCloudDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishSummaryToCscc">putPublishSummaryToCscc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPubSub">putPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putSaveFindings">putSaveFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetDeidentify">resetDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetJobNotificationEmails">resetJobNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishFindingsToCloudDataCatalog">resetPublishFindingsToCloudDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishSummaryToCscc">resetPublishSummaryToCscc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPubSub">resetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetSaveFindings">resetSaveFindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeidentify` <a name="putDeidentify" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putDeidentify"></a>

```typescript
public putDeidentify(value: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putDeidentify.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

---

##### `putJobNotificationEmails` <a name="putJobNotificationEmails" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putJobNotificationEmails"></a>

```typescript
public putJobNotificationEmails(value: GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putJobNotificationEmails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

---

##### `putPublishFindingsToCloudDataCatalog` <a name="putPublishFindingsToCloudDataCatalog" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishFindingsToCloudDataCatalog"></a>

```typescript
public putPublishFindingsToCloudDataCatalog(value: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishFindingsToCloudDataCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

---

##### `putPublishSummaryToCscc` <a name="putPublishSummaryToCscc" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishSummaryToCscc"></a>

```typescript
public putPublishSummaryToCscc(value: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishSummaryToCscc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

---

##### `putPubSub` <a name="putPubSub" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPubSub"></a>

```typescript
public putPubSub(value: GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a>

---

##### `putSaveFindings` <a name="putSaveFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putSaveFindings"></a>

```typescript
public putSaveFindings(value: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.putSaveFindings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

---

##### `resetDeidentify` <a name="resetDeidentify" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetDeidentify"></a>

```typescript
public resetDeidentify(): void
```

##### `resetJobNotificationEmails` <a name="resetJobNotificationEmails" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetJobNotificationEmails"></a>

```typescript
public resetJobNotificationEmails(): void
```

##### `resetPublishFindingsToCloudDataCatalog` <a name="resetPublishFindingsToCloudDataCatalog" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishFindingsToCloudDataCatalog"></a>

```typescript
public resetPublishFindingsToCloudDataCatalog(): void
```

##### `resetPublishSummaryToCscc` <a name="resetPublishSummaryToCscc" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishSummaryToCscc"></a>

```typescript
public resetPublishSummaryToCscc(): void
```

##### `resetPubSub` <a name="resetPubSub" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPubSub"></a>

```typescript
public resetPubSub(): void
```

##### `resetSaveFindings` <a name="resetSaveFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.resetSaveFindings"></a>

```typescript
public resetSaveFindings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentify">deidentify</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmails">jobNotificationEmails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalog">publishFindingsToCloudDataCatalog</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCscc">publishSummaryToCscc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindings">saveFindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentifyInput">deidentifyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmailsInput">jobNotificationEmailsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalogInput">publishFindingsToCloudDataCatalogInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCsccInput">publishSummaryToCsccInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSubInput">pubSubInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindingsInput">saveFindingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deidentify`<sup>Required</sup> <a name="deidentify" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentify"></a>

```typescript
public readonly deidentify: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference</a>

---

##### `jobNotificationEmails`<sup>Required</sup> <a name="jobNotificationEmails" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmails"></a>

```typescript
public readonly jobNotificationEmails: GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference</a>

---

##### `publishFindingsToCloudDataCatalog`<sup>Required</sup> <a name="publishFindingsToCloudDataCatalog" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalog"></a>

```typescript
public readonly publishFindingsToCloudDataCatalog: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference</a>

---

##### `publishSummaryToCscc`<sup>Required</sup> <a name="publishSummaryToCscc" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCscc"></a>

```typescript
public readonly publishSummaryToCscc: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference</a>

---

##### `pubSub`<sup>Required</sup> <a name="pubSub" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSub"></a>

```typescript
public readonly pubSub: GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference</a>

---

##### `saveFindings`<sup>Required</sup> <a name="saveFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindings"></a>

```typescript
public readonly saveFindings: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference</a>

---

##### `deidentifyInput`<sup>Optional</sup> <a name="deidentifyInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentifyInput"></a>

```typescript
public readonly deidentifyInput: GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify">GoogleDataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

---

##### `jobNotificationEmailsInput`<sup>Optional</sup> <a name="jobNotificationEmailsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmailsInput"></a>

```typescript
public readonly jobNotificationEmailsInput: GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">GoogleDataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

---

##### `publishFindingsToCloudDataCatalogInput`<sup>Optional</sup> <a name="publishFindingsToCloudDataCatalogInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalogInput"></a>

```typescript
public readonly publishFindingsToCloudDataCatalogInput: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

---

##### `publishSummaryToCsccInput`<sup>Optional</sup> <a name="publishSummaryToCsccInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCsccInput"></a>

```typescript
public readonly publishSummaryToCsccInput: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

---

##### `pubSubInput`<sup>Optional</sup> <a name="pubSubInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSubInput"></a>

```typescript
public readonly pubSubInput: GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a>

---

##### `saveFindingsInput`<sup>Optional</sup> <a name="saveFindingsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindingsInput"></a>

```typescript
public readonly saveFindingsInput: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a> | cdktf.IResolvable

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">GoogleDataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub">GoogleDataLossPreventionJobTriggerInspectJobActionsPubSub</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTable` <a name="putTable" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.putTable"></a>

```typescript
public putTable(value: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

---

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resetOutputSchema"></a>

```typescript
public resetOutputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchema">outputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.table"></a>

```typescript
public readonly table: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference</a>

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchemaInput"></a>

```typescript
public readonly outputSchemaInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.putOutputConfig"></a>

```typescript
public putOutputConfig(value: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfig"></a>

```typescript
public readonly outputConfig: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference</a>

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings">GoogleDataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.putStorageConfig">putStorageConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.putStorageConfig"></a>

```typescript
public putStorageConfig(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList">GoogleDataLossPreventionJobTriggerInspectJobActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateNameInput">inspectTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateName">inspectTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.actions"></a>

```typescript
public readonly actions: GoogleDataLossPreventionJobTriggerInspectJobActionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActionsList">GoogleDataLossPreventionJobTriggerInspectJobActionsList</a>

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfig"></a>

```typescript
public readonly storageConfig: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobActions">GoogleDataLossPreventionJobTriggerInspectJobActions</a>[]

---

##### `inspectTemplateNameInput`<sup>Optional</sup> <a name="inspectTemplateNameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateNameInput"></a>

```typescript
public readonly inspectTemplateNameInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a>

---

##### `inspectTemplateName`<sup>Required</sup> <a name="inspectTemplateName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateName"></a>

```typescript
public readonly inspectTemplateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJob;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJob">GoogleDataLossPreventionJobTriggerInspectJob</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a> | cdktf.IResolvable

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putIdentifyingFields">putIdentifyingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putTableReference">putTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetIdentifyingFields">resetIdentifyingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimit">resetRowsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimitPercent">resetRowsLimitPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetSampleMethod">resetSampleMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentifyingFields` <a name="putIdentifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putIdentifyingFields"></a>

```typescript
public putIdentifyingFields(value: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putIdentifyingFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

---

##### `putTableReference` <a name="putTableReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putTableReference"></a>

```typescript
public putTableReference(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putTableReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

---

##### `resetIdentifyingFields` <a name="resetIdentifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetIdentifyingFields"></a>

```typescript
public resetIdentifyingFields(): void
```

##### `resetRowsLimit` <a name="resetRowsLimit" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimit"></a>

```typescript
public resetRowsLimit(): void
```

##### `resetRowsLimitPercent` <a name="resetRowsLimitPercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimitPercent"></a>

```typescript
public resetRowsLimitPercent(): void
```

##### `resetSampleMethod` <a name="resetSampleMethod" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetSampleMethod"></a>

```typescript
public resetSampleMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFields">identifyingFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReference">tableReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFieldsInput">identifyingFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitInput">rowsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercentInput">rowsLimitPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethodInput">sampleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReferenceInput">tableReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimit">rowsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercent">rowsLimitPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifyingFields`<sup>Required</sup> <a name="identifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList</a>

---

##### `tableReference`<sup>Required</sup> <a name="tableReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReference"></a>

```typescript
public readonly tableReference: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference</a>

---

##### `identifyingFieldsInput`<sup>Optional</sup> <a name="identifyingFieldsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFieldsInput"></a>

```typescript
public readonly identifyingFieldsInput: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

---

##### `rowsLimitInput`<sup>Optional</sup> <a name="rowsLimitInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitInput"></a>

```typescript
public readonly rowsLimitInput: number;
```

- *Type:* number

---

##### `rowsLimitPercentInput`<sup>Optional</sup> <a name="rowsLimitPercentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercentInput"></a>

```typescript
public readonly rowsLimitPercentInput: number;
```

- *Type:* number

---

##### `sampleMethodInput`<sup>Optional</sup> <a name="sampleMethodInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethodInput"></a>

```typescript
public readonly sampleMethodInput: string;
```

- *Type:* string

---

##### `tableReferenceInput`<sup>Optional</sup> <a name="tableReferenceInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReferenceInput"></a>

```typescript
public readonly tableReferenceInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

---

##### `rowsLimit`<sup>Required</sup> <a name="rowsLimit" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimit"></a>

```typescript
public readonly rowsLimit: number;
```

- *Type:* number

---

##### `rowsLimitPercent`<sup>Required</sup> <a name="rowsLimitPercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercent"></a>

```typescript
public readonly rowsLimitPercent: number;
```

- *Type:* number

---

##### `sampleMethod`<sup>Required</sup> <a name="sampleMethod" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.putRegexFileSet">putRegexFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetRegexFileSet">resetRegexFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegexFileSet` <a name="putRegexFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.putRegexFileSet"></a>

```typescript
public putRegexFileSet(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.putRegexFileSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

---

##### `resetRegexFileSet` <a name="resetRegexFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetRegexFileSet"></a>

```typescript
public resetRegexFileSet(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSet">regexFileSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSetInput">regexFileSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexFileSet`<sup>Required</sup> <a name="regexFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSet"></a>

```typescript
public readonly regexFileSet: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference</a>

---

##### `regexFileSetInput`<sup>Optional</sup> <a name="regexFileSetInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSetInput"></a>

```typescript
public readonly regexFileSetInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetExcludeRegex">resetExcludeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetIncludeRegex">resetIncludeRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeRegex` <a name="resetExcludeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetExcludeRegex"></a>

```typescript
public resetExcludeRegex(): void
```

##### `resetIncludeRegex` <a name="resetIncludeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetIncludeRegex"></a>

```typescript
public resetIncludeRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegexInput">excludeRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegexInput">includeRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegex">excludeRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegex">includeRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `excludeRegexInput`<sup>Optional</sup> <a name="excludeRegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegexInput"></a>

```typescript
public readonly excludeRegexInput: string[];
```

- *Type:* string[]

---

##### `includeRegexInput`<sup>Optional</sup> <a name="includeRegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegexInput"></a>

```typescript
public readonly includeRegexInput: string[];
```

- *Type:* string[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `excludeRegex`<sup>Required</sup> <a name="excludeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegex"></a>

```typescript
public readonly excludeRegex: string[];
```

- *Type:* string[]

---

##### `includeRegex`<sup>Required</sup> <a name="includeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegex"></a>

```typescript
public readonly includeRegex: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.putFileSet">putFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFile">resetBytesLimitPerFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFilePercent">resetBytesLimitPerFilePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFilesLimitPercent">resetFilesLimitPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFileTypes">resetFileTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetSampleMethod">resetSampleMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileSet` <a name="putFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.putFileSet"></a>

```typescript
public putFileSet(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.putFileSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

---

##### `resetBytesLimitPerFile` <a name="resetBytesLimitPerFile" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFile"></a>

```typescript
public resetBytesLimitPerFile(): void
```

##### `resetBytesLimitPerFilePercent` <a name="resetBytesLimitPerFilePercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFilePercent"></a>

```typescript
public resetBytesLimitPerFilePercent(): void
```

##### `resetFilesLimitPercent` <a name="resetFilesLimitPercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFilesLimitPercent"></a>

```typescript
public resetFilesLimitPercent(): void
```

##### `resetFileTypes` <a name="resetFileTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFileTypes"></a>

```typescript
public resetFileTypes(): void
```

##### `resetSampleMethod` <a name="resetSampleMethod" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetSampleMethod"></a>

```typescript
public resetSampleMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSet">fileSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFileInput">bytesLimitPerFileInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercentInput">bytesLimitPerFilePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSetInput">fileSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercentInput">filesLimitPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypesInput">fileTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethodInput">sampleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFile">bytesLimitPerFile</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercent">bytesLimitPerFilePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercent">filesLimitPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSet`<sup>Required</sup> <a name="fileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSet"></a>

```typescript
public readonly fileSet: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference</a>

---

##### `bytesLimitPerFileInput`<sup>Optional</sup> <a name="bytesLimitPerFileInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFileInput"></a>

```typescript
public readonly bytesLimitPerFileInput: number;
```

- *Type:* number

---

##### `bytesLimitPerFilePercentInput`<sup>Optional</sup> <a name="bytesLimitPerFilePercentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercentInput"></a>

```typescript
public readonly bytesLimitPerFilePercentInput: number;
```

- *Type:* number

---

##### `fileSetInput`<sup>Optional</sup> <a name="fileSetInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSetInput"></a>

```typescript
public readonly fileSetInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

---

##### `filesLimitPercentInput`<sup>Optional</sup> <a name="filesLimitPercentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercentInput"></a>

```typescript
public readonly filesLimitPercentInput: number;
```

- *Type:* number

---

##### `fileTypesInput`<sup>Optional</sup> <a name="fileTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypesInput"></a>

```typescript
public readonly fileTypesInput: string[];
```

- *Type:* string[]

---

##### `sampleMethodInput`<sup>Optional</sup> <a name="sampleMethodInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethodInput"></a>

```typescript
public readonly sampleMethodInput: string;
```

- *Type:* string

---

##### `bytesLimitPerFile`<sup>Required</sup> <a name="bytesLimitPerFile" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFile"></a>

```typescript
public readonly bytesLimitPerFile: number;
```

- *Type:* number

---

##### `bytesLimitPerFilePercent`<sup>Required</sup> <a name="bytesLimitPerFilePercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercent"></a>

```typescript
public readonly bytesLimitPerFilePercent: number;
```

- *Type:* number

---

##### `filesLimitPercent`<sup>Required</sup> <a name="filesLimitPercent" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercent"></a>

```typescript
public readonly filesLimitPercent: number;
```

- *Type:* number

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

---

##### `sampleMethod`<sup>Required</sup> <a name="sampleMethod" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putKind">putKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putPartitionId">putPartitionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKind` <a name="putKind" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putKind"></a>

```typescript
public putKind(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putKind.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

---

##### `putPartitionId` <a name="putPartitionId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putPartitionId"></a>

```typescript
public putPartitionId(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putPartitionId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kind">kind</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionId">partitionId</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kindInput">kindInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionIdInput">partitionIdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kind"></a>

```typescript
public readonly kind: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference</a>

---

##### `partitionId`<sup>Required</sup> <a name="partitionId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionId"></a>

```typescript
public readonly partitionId: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

---

##### `partitionIdInput`<sup>Optional</sup> <a name="partitionIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionIdInput"></a>

```typescript
public readonly partitionIdInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.putTableOptions">putTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetRequiredFindingLabelKeys">resetRequiredFindingLabelKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetTableOptions">resetTableOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTableOptions` <a name="putTableOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.putTableOptions"></a>

```typescript
public putTableOptions(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.putTableOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRequiredFindingLabelKeys` <a name="resetRequiredFindingLabelKeys" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetRequiredFindingLabelKeys"></a>

```typescript
public resetRequiredFindingLabelKeys(): void
```

##### `resetTableOptions` <a name="resetTableOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetTableOptions"></a>

```typescript
public resetTableOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptions">tableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeysInput">requiredFindingLabelKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptionsInput">tableOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeys">requiredFindingLabelKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableOptions`<sup>Required</sup> <a name="tableOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptions"></a>

```typescript
public readonly tableOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requiredFindingLabelKeysInput`<sup>Optional</sup> <a name="requiredFindingLabelKeysInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeysInput"></a>

```typescript
public readonly requiredFindingLabelKeysInput: string[];
```

- *Type:* string[]

---

##### `tableOptionsInput`<sup>Optional</sup> <a name="tableOptionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptionsInput"></a>

```typescript
public readonly tableOptionsInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requiredFindingLabelKeys`<sup>Required</sup> <a name="requiredFindingLabelKeys" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeys"></a>

```typescript
public readonly requiredFindingLabelKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a> | cdktf.IResolvable

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.putIdentifyingFields">putIdentifyingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resetIdentifyingFields">resetIdentifyingFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentifyingFields` <a name="putIdentifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.putIdentifyingFields"></a>

```typescript
public putIdentifyingFields(value: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.putIdentifyingFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

---

##### `resetIdentifyingFields` <a name="resetIdentifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resetIdentifyingFields"></a>

```typescript
public resetIdentifyingFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFields">identifyingFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFieldsInput">identifyingFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifyingFields`<sup>Required</sup> <a name="identifyingFields" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList</a>

---

##### `identifyingFieldsInput`<sup>Optional</sup> <a name="identifyingFieldsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFieldsInput"></a>

```typescript
public readonly identifyingFieldsInput: IResolvable | GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putBigQueryOptions">putBigQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putCloudStorageOptions">putCloudStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putDatastoreOptions">putDatastoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putHybridOptions">putHybridOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putTimespanConfig">putTimespanConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetBigQueryOptions">resetBigQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetCloudStorageOptions">resetCloudStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetDatastoreOptions">resetDatastoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetHybridOptions">resetHybridOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetTimespanConfig">resetTimespanConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigQueryOptions` <a name="putBigQueryOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putBigQueryOptions"></a>

```typescript
public putBigQueryOptions(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putBigQueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

---

##### `putCloudStorageOptions` <a name="putCloudStorageOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putCloudStorageOptions"></a>

```typescript
public putCloudStorageOptions(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putCloudStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

---

##### `putDatastoreOptions` <a name="putDatastoreOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putDatastoreOptions"></a>

```typescript
public putDatastoreOptions(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putDatastoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

---

##### `putHybridOptions` <a name="putHybridOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putHybridOptions"></a>

```typescript
public putHybridOptions(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putHybridOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

---

##### `putTimespanConfig` <a name="putTimespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putTimespanConfig"></a>

```typescript
public putTimespanConfig(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putTimespanConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

---

##### `resetBigQueryOptions` <a name="resetBigQueryOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetBigQueryOptions"></a>

```typescript
public resetBigQueryOptions(): void
```

##### `resetCloudStorageOptions` <a name="resetCloudStorageOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetCloudStorageOptions"></a>

```typescript
public resetCloudStorageOptions(): void
```

##### `resetDatastoreOptions` <a name="resetDatastoreOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetDatastoreOptions"></a>

```typescript
public resetDatastoreOptions(): void
```

##### `resetHybridOptions` <a name="resetHybridOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetHybridOptions"></a>

```typescript
public resetHybridOptions(): void
```

##### `resetTimespanConfig` <a name="resetTimespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetTimespanConfig"></a>

```typescript
public resetTimespanConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptions">bigQueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptions">cloudStorageOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptions">datastoreOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptions">hybridOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfig">timespanConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptionsInput">bigQueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptionsInput">cloudStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptionsInput">datastoreOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptionsInput">hybridOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfigInput">timespanConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigQueryOptions`<sup>Required</sup> <a name="bigQueryOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptions"></a>

```typescript
public readonly bigQueryOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference</a>

---

##### `cloudStorageOptions`<sup>Required</sup> <a name="cloudStorageOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptions"></a>

```typescript
public readonly cloudStorageOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference</a>

---

##### `datastoreOptions`<sup>Required</sup> <a name="datastoreOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptions"></a>

```typescript
public readonly datastoreOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference</a>

---

##### `hybridOptions`<sup>Required</sup> <a name="hybridOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptions"></a>

```typescript
public readonly hybridOptions: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference</a>

---

##### `timespanConfig`<sup>Required</sup> <a name="timespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfig"></a>

```typescript
public readonly timespanConfig: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference</a>

---

##### `bigQueryOptionsInput`<sup>Optional</sup> <a name="bigQueryOptionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptionsInput"></a>

```typescript
public readonly bigQueryOptionsInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

---

##### `cloudStorageOptionsInput`<sup>Optional</sup> <a name="cloudStorageOptionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptionsInput"></a>

```typescript
public readonly cloudStorageOptionsInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

---

##### `datastoreOptionsInput`<sup>Optional</sup> <a name="datastoreOptionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptionsInput"></a>

```typescript
public readonly datastoreOptionsInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

---

##### `hybridOptionsInput`<sup>Optional</sup> <a name="hybridOptionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptionsInput"></a>

```typescript
public readonly hybridOptionsInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

---

##### `timespanConfigInput`<sup>Optional</sup> <a name="timespanConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfigInput"></a>

```typescript
public readonly timespanConfigInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfig</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.putTimestampField">putTimestampField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEnableAutoPopulationOfTimespanConfig">resetEnableAutoPopulationOfTimespanConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimestampField` <a name="putTimestampField" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.putTimestampField"></a>

```typescript
public putTimestampField(value: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.putTimestampField.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

---

##### `resetEnableAutoPopulationOfTimespanConfig` <a name="resetEnableAutoPopulationOfTimespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEnableAutoPopulationOfTimespanConfig"></a>

```typescript
public resetEnableAutoPopulationOfTimespanConfig(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampField">timestampField</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfigInput">enableAutoPopulationOfTimespanConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampFieldInput">timestampFieldInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfig">enableAutoPopulationOfTimespanConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestampField`<sup>Required</sup> <a name="timestampField" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampField"></a>

```typescript
public readonly timestampField: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference</a>

---

##### `enableAutoPopulationOfTimespanConfigInput`<sup>Optional</sup> <a name="enableAutoPopulationOfTimespanConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfigInput"></a>

```typescript
public readonly enableAutoPopulationOfTimespanConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timestampFieldInput`<sup>Optional</sup> <a name="timestampFieldInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampFieldInput"></a>

```typescript
public readonly timestampFieldInput: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

---

##### `enableAutoPopulationOfTimespanConfig`<sup>Required</sup> <a name="enableAutoPopulationOfTimespanConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfig"></a>

```typescript
public readonly enableAutoPopulationOfTimespanConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

---


### GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference <a name="GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">GoogleDataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

---


### GoogleDataLossPreventionJobTriggerTimeoutsOutputReference <a name="GoogleDataLossPreventionJobTriggerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTimeouts">GoogleDataLossPreventionJobTriggerTimeouts</a> | cdktf.IResolvable

---


### GoogleDataLossPreventionJobTriggerTriggersList <a name="GoogleDataLossPreventionJobTriggerTriggersList" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.get"></a>

```typescript
public get(index: number): GoogleDataLossPreventionJobTriggerTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataLossPreventionJobTriggerTriggers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a>[]

---


### GoogleDataLossPreventionJobTriggerTriggersManualOutputReference <a name="GoogleDataLossPreventionJobTriggerTriggersManualOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerTriggersManual;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a>

---


### GoogleDataLossPreventionJobTriggerTriggersOutputReference <a name="GoogleDataLossPreventionJobTriggerTriggersOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.putManual">putManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resetManual">resetManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManual` <a name="putManual" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.putManual"></a>

```typescript
public putManual(value: GoogleDataLossPreventionJobTriggerTriggersManual): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: GoogleDataLossPreventionJobTriggerTriggersSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a>

---

##### `resetManual` <a name="resetManual" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resetManual"></a>

```typescript
public resetManual(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference">GoogleDataLossPreventionJobTriggerTriggersManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference">GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.manualInput">manualInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.manual"></a>

```typescript
public readonly manual: GoogleDataLossPreventionJobTriggerTriggersManualOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManualOutputReference">GoogleDataLossPreventionJobTriggerTriggersManualOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.schedule"></a>

```typescript
public readonly schedule: GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference">GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference</a>

---

##### `manualInput`<sup>Optional</sup> <a name="manualInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.manualInput"></a>

```typescript
public readonly manualInput: GoogleDataLossPreventionJobTriggerTriggersManual;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersManual">GoogleDataLossPreventionJobTriggerTriggersManual</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: GoogleDataLossPreventionJobTriggerTriggersSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerTriggers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggers">GoogleDataLossPreventionJobTriggerTriggers</a> | cdktf.IResolvable

---


### GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference <a name="GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer"></a>

```typescript
import { googleDataLossPreventionJobTrigger } from '@cdktf/provider-google-beta'

new googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.resetRecurrencePeriodDuration">resetRecurrencePeriodDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecurrencePeriodDuration` <a name="resetRecurrencePeriodDuration" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.resetRecurrencePeriodDuration"></a>

```typescript
public resetRecurrencePeriodDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDurationInput">recurrencePeriodDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDuration">recurrencePeriodDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrencePeriodDurationInput`<sup>Optional</sup> <a name="recurrencePeriodDurationInput" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDurationInput"></a>

```typescript
public readonly recurrencePeriodDurationInput: string;
```

- *Type:* string

---

##### `recurrencePeriodDuration`<sup>Required</sup> <a name="recurrencePeriodDuration" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDuration"></a>

```typescript
public readonly recurrencePeriodDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataLossPreventionJobTriggerTriggersSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionJobTrigger.GoogleDataLossPreventionJobTriggerTriggersSchedule">GoogleDataLossPreventionJobTriggerTriggersSchedule</a>

---



